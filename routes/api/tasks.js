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
        user.questionsAnswered.map(questionId => {
          Task.find({ questionId })
        })
      }
    })
})

module.exports = router;