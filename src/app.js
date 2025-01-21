// Setup express app
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expensesRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const incomeRoutes = require('./routes/incomeRoutes');

// Load environment variables
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/incomes', incomeRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

module.exports = app;
