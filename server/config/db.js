const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected to: ${conn.connection.host}`);
}

module.exports = connectDB;