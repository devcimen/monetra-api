// Controller for expense related operations
const Expense = require('../models/expenseModel');
const Category = require('../models/categoryModel');
const { parseAsync } = require('json2csv');

// Create a new expense
const createExpense = async (req, res) => {
    try {
        const { title, amount, category, description, date } = req.body;

        // Validate required fields
        if (!title || !amount || !category) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Check if category exists
        const existingCategory = await Category.findOne({ name: category });

        if (!existingCategory) {
            existingCategory = await Category.create({ name: category });
        }

        // Create a new expense
        const expense = await Expense.create({
            user: req.user._id,
            title,
            amount,
            category: existingCategory.name,
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

// Filter expenses
const filterExpenses = async (req, res) => {
    try {
        const { range, startDate, endDate, category, description, minAmount, maxAmount, export: exportCsv } = req.query;

        let filter = { user: req.user._id };

        // Date filter
        const now = new Date();
        if (range === 'past_week') {
            filter.date = { $gte: new Date(now.setDate(now.getDate() - 7)) };
        } else if (range === 'past_month') {
            filter.date = { $gte: new Date(now.setMonth(now.getMonth() - 1)) };
        } else if (range === 'past_3_months') {
            filter.date = { $gte: new Date(now.setMonth(now.getMonth() - 3)) };
        } else if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                return res.status(400).json({ message: 'Invalid date format' });
            }
            filter.date = { $gte: start, $lte: end };
        }

        // Category filter
        if (category) filter.category = category;

        // Description filter
        if (description) filter.description = { $regex: description, $options: 'i' };

        // Amount filter
        if (minAmount) {
            filter.amount = { ...filter.amount, $gte: parseFloat(minAmount) };
        }
        if (maxAmount) {
            filter.amount = { ...filter.amount, $lte: parseFloat(maxAmount) };
        }

        // Get expenses
        const expenses = await Expense.find(filter);

        // Export to CSV
        if (exportCsv === 'true') {
            const fields = ['title', 'amount', 'category', 'description', 'date'];
            const csv = await parseAsync(expenses, { fields });
            res.header('Content-Type', 'text/csv');
            res.attachment('expenses.csv');
            return res.send(csv);
        }

        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ message: 'Failed to filter expenses', error: error.message });
    }
};

module.exports = { createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense, filterExpenses };