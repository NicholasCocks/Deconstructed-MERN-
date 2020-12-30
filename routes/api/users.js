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

router.post('/signup', (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }


    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password,
                })

                // Creates and salts the password digest
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;

                        // Saves the new user then sends back the user's information
                        newUser.save()
                            .then(user => {
                                const payload = {
                                    _id: user._id,
                                    email: user.email,
                                    questionsAnswered: user.questionsAnswered,
                                    taskIds: user.taskIds
                                };

                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token,
                                        })
                                    }
                                )
                            })
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})
//                 bcrypt.genSalt(10, (err, salt) => {
//                     bcrypt.hash(newUser.password, salt, (err, hash) => {
//                         if (err) throw err;
//                         newUser.password = hash;
//                         newUser.save()
//                             .then(user => response.json(user))
//                             .catch(err => console.log(err))
//                     })
//                 })
//             }
//         })
// })

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