// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware Configuration
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Allows the backend to accept JSON data from the frontend

// Basic Test Route
app.get('/', (req, res) => {
    res.send('Smart Blood Bank Backend API is successfully running!');
});

// Define the Port mapping
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is LIVE on http://localhost:${PORT}`);
});
