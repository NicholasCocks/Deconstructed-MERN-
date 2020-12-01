const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    dataclassCollection: [{ type: Schema.Types.ObjectId, ref: 'dataclasses' }],
});


const Question = mongoose.model('questions', QuestionSchema)
module.exports = Question;