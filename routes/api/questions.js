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
        .then(questions => {
            const obj = {};
            dataclasses.forEach(dataclass => {
                obj[dataclass._id] = dataclass
            })
            return res.json(obj)
        })
        .catch(err => console.log(err))
})

//create questions
router.post('/new', (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) return res.status(400).json(errors)

    const toLower = req.body.question.toLowerCase()
    Question.findOne({ question: toLower })
        .then(question => {
            if (question) {
                errors.question = 'Question already exists'
                return res.status(400).json(errors)
            } else {
                const newQuestion = new Question({ question: toLower })
                newQuestion.save()
                    .then(question => res.json(question))
                    .catch(error => console.log(error))
            }
        })

})

router.patch('/upate', (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) return res.status(400).json(errors)

    const toLower = req.body.question.toLowerCase()
    Question.findOne({ question: toLower })
        .then(question => {
            if (question) {
                question._doc.dataclassCollection.push(req.body.class)
                question.update(req.body)
                    .then(question => res.json(question))
                    .catch(error => console.log(error))
            } else {
                errors.class = "can't find this question"
                return res.status(400).json(errors)
            }
        })
})

module.exports = router;

//update question with references to dataclasses