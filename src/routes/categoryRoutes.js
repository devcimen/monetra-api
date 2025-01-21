// Endpoints for category routes
const express = require('express');
const { createCategory } = require('../controllers/categoryController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes
router.route('/')
    .post(protect, createCategory);

module.exports = router;