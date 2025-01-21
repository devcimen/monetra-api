// Model for income collection
const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Income', incomeSchema);