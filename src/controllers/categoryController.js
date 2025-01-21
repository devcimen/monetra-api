// Controller for category related operations
const Category = require('../models/categoryModel');

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Create a new category
        const category = await Category.create({
            name
        });

        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create category', error: error.message });
    }
};

module.exports = { createCategory };