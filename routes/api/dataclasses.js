const express = require('express');
const router = express.Router();
const Dataclass = require('../../models/Dataclass');
const validateDataclass = require('../../validation/dataclass');

router.get('/test', (req, res) => {
    debugger
    res.json({
        msg: "this is the dataclass route"
    })
})

//return all dataclasses
router.get('/', (req, res) => {
    Dataclass.find()
        .then(dataclasses => res.json(dataclasses))
        .catch(err => console.log(err))
})

//create dataclasses
router.post('/new', (req, res) => {
    debugger
    const { errors, isValid } = validateDataclass(req.body);

    if (!isValid) return res.status(400).json(errors)

    Dataclass.findOne({ class: req.body.class })
        .then(dataclass => {
            if (dataclass) {
                errors.dataclass = 'Dataclass already exists'
                return res.status(400).json(errors)
            } else {
                const newDataclass = new Dataclass({ class: req.body.class })
                newDataclass.save()
                    .then(dataclass => res.json(dataclass))
                    .catch(error => console.log(error))
            }
        })

})

//update dataclasses with references to questions

module.exports = router;