require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes (allows requests from React app)
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
// Note: If you have a different MongoDB URI, update it in a .env file or fallback to localhost
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolioDB';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ Connected to MongoDB successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);

// Base route for health check
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
