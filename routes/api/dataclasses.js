const express = require('express');
const router = express.Router();
const Dataclass = require('../../models/Dataclass');
const validateDataclass = require('../../validation/dataclass');

//return all dataclasses
router.get('/', (req, res) => {
    Dataclass.find()
        .then(dataclasses => {
            const obj = {};
            debugger
            dataclasses.forEach(dataclass => {
                obj[dataclass._id] = dataclass
            })
            return res.json(obj)
        })
        .catch(err => console.log(err))
})

//create dataclasses
router.post('/new', (req, res) => {
    debugger
    const { errors, isValid } = validateDataclass(req.body);

    if (!isValid) return res.status(400).json(errors)

    const toLower = req.body.class.toLowerCase()
    Dataclass.findOne({ class: toLower })
        .then(dataclass => {
            //lowercase 
            if (dataclass) {
                errors.class = 'Dataclass already exists'
                return res.status(400).json(errors)
            } else {
                const newDataclass = new Dataclass({ class: toLower })
                newDataclass.save()
                    .then(dataclass => res.json(dataclass))
                    .catch(error => console.log(error))
            }
        })

})

router.patch('/update', (req, res) => {
    const { errors, isValid } = validateDataclass(req.body);

    if (!isValid) return res.status(400).json(errors)

    const toLower = req.body.class.toLowerCase()
    Dataclass.findOne({ class: toLower })
        .then(dataclass => {
            if (dataclass) {
                dataclass._doc.companiesCollecting.push(req.body.company)
                debugger
                dataclass.update({ class: toLower })
                    .then(data => res.json(data))
                    .catch(error => console.log(error))
            } else {
                errors.class = "Dataclass not found"
                return res.status(400).json(errors)
            }
        })
})

//update dataclasses with references to questions

module.exports = router;