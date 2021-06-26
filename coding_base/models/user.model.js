const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true
    },
    sentence_storage: [{
        type: String
    }],
    sentence_class: [{
        type: String
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;