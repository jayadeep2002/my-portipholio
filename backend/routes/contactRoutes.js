const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST route to handle form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        // Create a new contact message document
        const newMessage = new ContactMessage({
            name,
            email,
            message,
        });

        // Save to database
        await newMessage.save();

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
