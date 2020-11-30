const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    dataclassCollection: [{ type: Schema.type.objectId, ref: 'dataclasses' }],
});


const Question = mongoose.model('questions', QuestionSchema)
module.exports = Question;