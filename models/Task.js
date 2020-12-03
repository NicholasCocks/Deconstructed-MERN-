const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'questions'
  },
  dataclassId: {
    type: Schema.Types.ObjectId,
    ref: 'dataclasses'
  }
})

const Task = mongoose.model('tasks', TaskSchema)
module.exports = Task;