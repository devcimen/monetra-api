// Controller for income
const Income = require('../models/incomeModel');

// Add income
const addIncome = async (req, res) => {
    try {
        const income = new Income({
            amount: req.body.amount,
            currency: req.body.currency,
            user: req.user._id
        });

        await income.save();
        res.status(201).send(income);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all incomes
const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.user._id });
        res.send(incomes);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get income by id
const getIncome = async (req, res) => {
    try {
        const income = await Income.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!income) {
            return res.status(404).send();
        }

        res.send(income);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update income
const updateIncome = async (req, res) => {
    try {
        const income = await Income.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true }
        );

        if (!income) {
            return res.status(404).send();
        }

        res.send(income);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete income
const deleteIncome = async (req, res) => {
    try {
        const income = await Income.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id
        });

        if (!income) {
            return res.status(404).send();
        }

        res.status(204).json({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { addIncome, getIncomes, getIncome, updateIncome, deleteIncome };