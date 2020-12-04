const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Task = require('../../models/Task');

router.get('/:userId', (req, res) => { // /api/tasks/:userId
  const { userId } = req.params;
  
  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(400).json({ msg: 'User not found' })
      } else {
          Task.find().all('userId', user._id )
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


router.delete('/:taskId', (req, res) => { // /api/tasks/:taskId
  const { taskId } = req.params;
  debugger
  Task.findByIdAndRemove(taskId) 
    .then(task => {
      debugger
      if(!task) {
        res.status(404).json({msg: 'Not found'})
      } else {
        res.json(task)
      }
    })
})

module.exports = router;