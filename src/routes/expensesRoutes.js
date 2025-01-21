// Endpoints for expense routes
const express = require('express');
const { createExpense, getExpenses, getExpenseById } = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes
router.route('/').post(protect, createExpense).get(protect, getExpenses);
router.route('/:id').get(protect, getExpenseById);

module.exports = router;