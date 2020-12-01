const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const validateQuestionInput = require('../../validation/question')


router.get('/test', (req, res) => {
    debugger
    res.json({
        msg: "this is the question route"
    })
})

//return all questions (in an array)
router.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => console.log(err))
})

//create questions
router.post('/new', (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) return res.status(400).json(errors)

    Question.findOne({ question: req.body.question })
        .then(question => {
            if (question) {
                errors.question = 'Question already exists'
                return res.status(400).json(errors)
            } else {
                const newQuestion = new Question({ question: req.body.question })
                newQuestion.save()
                    .then(question => res.json(question))
                    .catch(error => console.log(error))
            }
        })

})

module.exports = router;

//update question with references to dataclasses