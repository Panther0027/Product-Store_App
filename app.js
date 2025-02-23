import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './Routes/auth.js'
import ProductRoutes from './Routes/product.js'
import cors from 'cors';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// app.use('/api/auth', authRoutes);
app.use('/api/products', ProductRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('Server is listening on port ' + PORT + "...//")
})

