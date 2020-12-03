const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const User = require('../../models/User');
const Task = require('../../models/Task');

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  
  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(400).json({ msg: 'User not found' })
      } else {
          Task.find().all('questionId', user.questionsAnswered )
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err))
      }
    })
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

router.delete('/:taskId', (req, res) => {
  const { taskId } = req.params;

  Task.findById(taskId)
    .then(task => {
      if (!task) {
        return res.status(400).json({ msg: 'Task not found' })
      } else {
        
      }
    })
})

module.exports = router;