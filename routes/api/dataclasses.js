const express = require('express');
const router = express.Router();
const Dataclass = require('../../models/Dataclass');
const validateDataclass = require('../../validation/dataclass');

//return all dataclasses associated with one question
router.get('/', (req, res) => {

})

//create dataclasses
router.post('/new', (req, res) => {

})

//update dataclasses with references to questions

module.exports = router;