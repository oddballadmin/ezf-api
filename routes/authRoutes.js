import express from 'express';
import cors from 'cors';
import { registerUser, loginUser, getProfile, getUser } from '../controllers/authController.js';
const authRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
authRouter.use(cors({
    origin: process.env.VITE_NODE_ENV == "development" ? "http://localhost:3000" : process.env.VITE_CLIENT_BASE_URL,
    credentials: true,

    // Secure in production

}));

// API - Routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/profile', getProfile);
authRouter.get('/user', getUser);

export default authRouter;