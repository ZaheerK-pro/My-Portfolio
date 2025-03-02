const express = require('express');
const { handleContactForm, getContacts } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', handleContactForm);
router.get('/contacts', getContacts);

module.exports = router;
