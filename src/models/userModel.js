// Model for user collection
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Password hashing
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bycrypt.hash(this.password, 12);
    next();
});

// Password verification
userSchema.methods.verifyPassword = async function (password) {
    return await bycrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);