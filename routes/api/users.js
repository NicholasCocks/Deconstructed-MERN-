const express = require('express');
const router = express.Router(); //router obj from router
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys_dev');
const jwt = require('jsonwebtoken');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const Task = require('../../models/Task');

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route" })
});

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
    debugger;
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
                        id: user.id, 
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
    const questionsAnswered = JSON.parse(req.body.questionsAnswered)
    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(400).json({ msg: 'User not found' })
            } else {
                user.tasks
                user.questionsAnswered = questionsAnswered
                debugger
                Task.remove({ userId: user.id })
                const taskIds = questionsAnswered.map(questionId => {
                    const newTask = new Task({
                        questionId,
                        userId: user._id
                    })
                    newTask.save()
                    return newTask._id
                })
                user.taskIds = taskIds
                user.save()
                    .then(user => {
                        return res.json(user)
                    })
            }
        })
})


module.exports = router;