// Controller for expense related operations
const Expense = require('../models/expenseModel');

// Create a new expense
const createExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;

        // Validate required fields
        if (!title || !amount || !category) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Create a new expense
        const expense = await Expense.create({
            user: req.user._id,
            title,
            amount,
            category,
            description,
            date
        });

        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create expense', error: error.message });
    }
};

// Get all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user._id });

        res.json(expenses);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get expenses', error: error.message });
    }
};

// Get an expense by id
const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findOne({ _id: req.params.id, user: req.user._id });

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.json(expense);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get expense', error: error.message });
    }
};

module.exports = { createExpense, getExpenses, getExpenseById };