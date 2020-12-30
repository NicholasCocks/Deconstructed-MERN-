const express = require('express');
const Dataclass = require('../../models/Dataclass');
const router = express.Router();
const Question = require('../../models/Question');
const validateQuestionInput = require('../../validation/question')

router.get('/seed', (req, res) => {

    Question.find({ question: "google" })
        .then(questionArr => {
            Dataclass.find({ class: "email messages" })
                .then(dataclassArr => {
                    dataclassArr[0].companiesCollecting.push(questionArr[0]._id)
                    dataclassArr[0].save().then()

                    questionArr[0].dataclassCollection.push(dataclassArr[0]._id)
                    questionArr[0].save()
                        .then(question => res.json(question))
                        .catch(err => res.json(err))
                })
        })
})


router.get('/test', (req, res) => {
     
    res.json({
        msg: "this is the question route"
    })
})

//return all questions (in an array)
router.get('/', (req, res) => {
    Question.find()
        .then(questions => {
            const obj = {};
            questions.forEach(question => {
                obj[question._id] = question
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

router.patch('/update', (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) return res.status(400).json(errors)

    const toLower = req.body.question.toLowerCase()
    Question.findOne({ question: toLower })
        .then(question => {
            if (question) {
                question.dataclassCollection = req.body.class
                question.save()
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