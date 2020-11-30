const express = require('express');
const router = express.Router(); //router obj from router
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const { response } = require('express');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

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
router.post('/login', (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return response.status(404).json({ email: "This user doesn't exist" });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey, { expiresIn: 3600 },
                            (err, token) => {
                                response.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    } else {
                        return response.status(400).json({ password: "password incorrect" })
                    }
                })
        })
})

module.exports = router;