// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI stored in your .env file
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        // Stop the server if the database connection fails
        process.exit(1);
    }
};

module.exports = connectDB;
