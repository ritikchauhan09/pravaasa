const express = require('express');
const router = express.Router();
const Number = require('../models/Number'); // Adjusted to the correct path

// Route to add a new entry
router.post('/add', async (req, res) => {
    const { name, phoneNumber } = req.body;
    
    try {
        const newEntry = new Number({ name, phoneNumber });
        await newEntry.save();
        res.json({ message: 'Entry saved successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save entry' });
    }
});

// Route to get all entries
router.get('/all', async (req, res) => {
    try {
        const entries = await Number.find();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch entries' });
    }
});

module.exports = router;
