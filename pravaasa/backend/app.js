const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const User = require('./models/Number');
const cors = require('cors'); // Import cors


const app = express();
const server = http.createServer(app);

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://chauhanritik487:N58KbAmMq3F9oxBX@cluster0.h7cjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// API endpoint to add a new number
app.post('/api/add-number', async (req, res) => {
    const { number } = req.body;  // Get number from request body
    if (!number) {
        return res.status(400).json({ message: "Number is required" });
    }
    
    try {
        // Save number to the database
        await User.create({ number });
        res.status(201).json({ message: "Number saved successfully" });
    } catch (error) {
        console.error("Error saving number:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

server.listen(4000, function() {
    console.log("Server is running on port 4000");
});
