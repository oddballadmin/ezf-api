import express from 'express';
import cors from 'cors';
import protect from '../middleware/authenticate.js';

import { addExpense, deleteExpense, getAllExpenses, getSingleExpense, updateExpense } from '../controllers/expenseController.js';
const expenseRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
expenseRouter.use(cors({
    origin: process.env.VITE_NODE_ENV == "development" ? "http://localhost:3000" : process.env.VITE_CLIENT_BASE_URL,
    credentials: true,

}));

// API - Routes
expenseRouter.get('/expenses/', protect, getAllExpenses);
expenseRouter.post('/expenses/add', protect, addExpense);
expenseRouter.delete('/expenses/delete/:id', protect, deleteExpense);
expenseRouter.patch('/expenses/update/:id', protect, updateExpense);
expenseRouter.get('/expenses/:id', protect, getSingleExpense);


export default expenseRouter;