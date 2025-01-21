// Model for category collection
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Category', categorySchema);