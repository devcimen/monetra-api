const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from the header
            token = req.headers.authorization.split(' ')[1];
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get user from the database
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }
};

module.exports = { protect };