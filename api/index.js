import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors'; // Import CORS

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://myblog-1-ascy.onrender.com', // Frontend URL that you're deploying
  methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
  allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  credentials: true, // Allow cookies to be sent
};

// Use CORS middleware globally
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// Serve the React frontend (if needed)
app.use(express.static(path.join(__dirname, '/client/dist')));

// Fallback to index.html for React routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
