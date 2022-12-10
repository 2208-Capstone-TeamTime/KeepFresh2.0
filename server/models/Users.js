const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    displayName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
});

module.exports = mongoose.model('Users', UserSchema);