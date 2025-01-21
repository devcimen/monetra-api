// Model for expense collection
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: [true, 'Please add a title']
        },
        amount: {
            type: Number,
            required: [true, 'Please add an amount']
        },
        category: {
            type: String,
            required: [true, 'Please add a category']
        },
        description: {
            type: String,
            default: ''
        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Expense', expenseSchema);
