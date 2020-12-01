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
    answers: [{ type: Schema.Types.ObjectId, ref: 'questions' }],
    // tasks also go here
}, {
    timestamps: true
});

const User = mongoose.model('users', UserSchema);
module.exports = User;