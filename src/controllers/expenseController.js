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

// Update an expense
const updateExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;

        const expense = await Expense.findOne({ _id: req.params.id, user: req.user._id });

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // Update if provided
        if (title) expense.title = title;
        if (amount) expense.amount = amount;
        if (category) expense.category = category;
        if (description) expense.description = description;
        if (date) expense.date = date;

        const updatedExpense = await expense.save();

        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update expense', error: error.message });
    }
};

// Delete an expense
const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user._id });

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.json({ message: 'Expense removed' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to remove expense', error: error.message });
    }
};

module.exports = { createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense };