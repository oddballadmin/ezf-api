import express from 'express';
import cors from 'cors';
import { addIncome, deleteIncome, getAllIncomes, getSingleIncome, updateIncome } from '../controllers/incomeController.js';
import protect from '../middleware/authenticate.js';
const incomeRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
incomeRouter.use(cors({
    origin: process.env.VITE_NODE_ENV == "development" ? "http://localhost:3000" : process.env.VITE_CLIENT_BASE_URL,
    credentials: true,

}));

// API - Routes

incomeRouter.get('/income', protect, getAllIncomes);
incomeRouter.post('/income/add', protect, addIncome);
incomeRouter.delete('/income/delete/:id', protect, deleteIncome);
incomeRouter.patch('/income/update/:id', protect, updateIncome);
incomeRouter.get('/income/:id', protect, getSingleIncome);


export default incomeRouter;