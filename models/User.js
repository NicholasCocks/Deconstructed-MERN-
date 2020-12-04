const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    questionsAnswered: [{ type: Schema.Types.ObjectId, ref: 'questions' }],
    taskIds: [{ type: Schema.Types.ObjectId, ref: 'tasks'}]
}, {
    timestamps: true
});

const User = mongoose.model('users', UserSchema);
module.exports = User;