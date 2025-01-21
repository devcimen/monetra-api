// Endpoints for expense routes
const express = require('express');
const { createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense } = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes
router.route('/').post(protect, createExpense).get(protect, getExpenses);
router.route('/:id').get(protect, getExpenseById).put(protect, updateExpense).delete(protect, deleteExpense);

module.exports = router;