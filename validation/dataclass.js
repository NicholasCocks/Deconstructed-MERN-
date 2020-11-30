const Validator = require('validator');
const validText = require('./valid-text');

module.exports = data => {
    let errors = {};

    data.class = validText(data.class) ? data.class : '';

    if (Validator.isEmpty(data.class)) errors.class = 'Class field is required'

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
T