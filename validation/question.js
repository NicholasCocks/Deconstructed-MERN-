const Validator = require('validator');
const validText = require('./valid-text');

module.exports = data => {
    let errors = {};

    data.question = validText(data.question) ? data.question : '';

    if (Validator.isEmpty(data.question)) errors.question = 'Question field is required'

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}