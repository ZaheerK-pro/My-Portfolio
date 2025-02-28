const express = require('express');
const { handleContactForm } = require('../controllers/contactController');
const router = express.Router();

// Define the route for POST requests to /api/contact
router.post('/contact', handleContactForm);

module.exports = router;
