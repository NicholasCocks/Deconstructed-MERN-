const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const validateQuestionInput = require('../../validation/question')


router.get('/test', (req, res) => {
    res.json({
        msg: "this is the question route"
    })
})

//return all questions 
router.get('/', (req, res) => {
    res.json(Question.find({}));
})


//create questions
router.post('/new', (req, res) => {
    debugger
    const question = req.body.question
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) return res.status(400).json(errors)

    Question.findOne({ question })
        .then(question => {
            if (question) {
                errors.question = 'Question already exists'
                return res.status(400).json(errors)
            } else {
                const newQuestion = new Question(question)
                newQuestion.save()
                    .then(question => res.json(question))
                    .catch(error => console.log(error))
            }
        })

})

module.exports = router;

//update question with references to dataclasses