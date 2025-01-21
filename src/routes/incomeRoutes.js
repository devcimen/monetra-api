// Endpoints for income routes
const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { addIncome, getIncomes, getIncome, updateIncome, deleteIncome } = require('../controllers/incomeController');

const router = express.Router();

// Routes
router.route('/')
    .post(protect, addIncome)
    .get(protect, getIncomes);

router.route('/:id')
    .get(protect, getIncome)
    .put(protect, updateIncome)
    .delete(protect, deleteIncome);

module.exports = router;