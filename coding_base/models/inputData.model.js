const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inputSchema = new Schema({
    sentence: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const InputData = mongoose.model('InputData', inputSchema);

module.exports = InputData;