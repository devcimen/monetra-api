// Endpoints for user routes
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;