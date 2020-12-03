const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'questions',
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false,
    required: true
  }
})

const Task = mongoose.model('tasks', TaskSchema)
module.exports = Task;