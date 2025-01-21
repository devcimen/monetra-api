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

// Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.json(categories);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get categories', error: error.message });
    }
};

// Update a category
const updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        category.name = req.body.name || category.name;

        const updatedCategory = await category.save();

        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update category', error: error.message });
    }
};

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json({ message: 'Category removed' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to remove category', error: error.message });
    }
};

module.exports = { createCategory, getCategories, updateCategory, deleteCategory };