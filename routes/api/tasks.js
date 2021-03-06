const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Task = require('../../models/Task');

router.get('/:userId', (req, res) => { // /api/tasks/:userId
  const { userId } = req.params;
  Task.find().all('userId', userId )
    .then(tasks => {
      const obj = {}
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        obj[task._id] = task
      }
      res.json(obj)
    })
    .catch(err => res.json(err))
})

router.get('/:taskId', (req, res) => {
  const { taskId } = req.params;

  Task.findById(taskId)
    .then(task => {
      if (!task) {
        return res.status(400).json({ msg: 'Task not found' })
      } else {
        return res.json(task)
      }
    })
})

router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  const { questionId } = req.body;
  User.findById(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ msg: 'Not found' })
      } else {
        const params = { userId, questionId }
        const task = new Task(params)
        task.save()
        user.taskIds.push(task._id)
        user.questionsAnswered.push(task.questionId)
        user.save()
          .then((response) => {
            return res.json({ user, task })})
      }
    })
})

router.patch('/:taskId', (req, res) => {
  const { taskId } = req.params;
  Task.findByIdAndUpdate(taskId)
    .then(task => {
      if (!task) {
        res.status(404).json({ msg: 'Not found' })
      } else {
         if (task.isComplete) {
          task.isComplete = false
        } else {
          task.isComplete = true
        }
        task.save()
          .then(() => res.json(task))
      }
    })
})

router.delete('/:taskId', (req, res) => { // /api/tasks/:taskId
  const { taskId } = req.params;
   
  Task.findByIdAndRemove(taskId) 
    .then(task => {
      if(!task) {
        res.status(404).json({msg: 'Not found'})
      } else {
        User.findByIdAndUpdate(task.userId)
          .then(user => {
            user.questionsAnswered.pull(task.questionId)
            user.taskIds.pull(taskId)
            user.save()
              .then(() => res.json({ user, taskId: task._id }))
          })
      }
    })
})

module.exports = router;