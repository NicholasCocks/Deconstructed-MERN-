const express = require('express');
const router = express.Router(); //router obj from router
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const Task = require('../../models/Task');

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route" })
});

router.get('/:userId', (req, res) => {
    const { userId } = req.params
    User.findById(userId)
        .then(user => res.json(user))
})

router.post('/signup', (request, response) => {
    const { errors, isValid } = validateSignupInput(request.body);
    if (!isValid) {
        return response.status(400).json(errors)
    }


    User.findOne({ email: request.body.email })
        .then(user => {
            if (user) {
                return response.status(400).json({ email: "A user already registered with that email" })
            } else {
                const newUser = new User({
                    email: request.body.email,
                    password: request.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => response.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

router.post('/login', (req, res) => {
  
    const { errors, isValid } = validateLoginInput(req.body);
    const email = req.body.email;
    const password = req.body.password;
    
    if (!isValid) return res.status(400).json(errors)

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found'
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = { 
                        _id: user._id, 
                        email: user.email,
                        questionsAnswered: user.questionsAnswered,
                        taskIds: user.taskIds
                     };

                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        // Tell the key to expire in one hour
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        });
                } else {
                    return res.status(400).json({ password: 'Incorrect password' });
                }
            })
        })
})

router.patch('/:userId', (req, res) => {

    const { userId } = req.params
    const questionsAnswered = req.body
    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(400).json({ msg: 'User not found' })
            } else { 
                user.questionsAnswered = questionsAnswered
                questionsAnswered.forEach(questionId => {
                    Task.findOne({ userId: user._id, questionId })
                        .then(task => {
                            if (!task) {
                                const newTask = new Task({
                                    questionId,
                                    userId: user._id
                                })
                                newTask.save() 
                                user.taskIds.push(newTask._id)
                            } else {
                                res.json(user)
                            }
                        })
                    })
                }
                user.save()
                    .then(resp => res.json(resp))
        })
})


module.exports = router;