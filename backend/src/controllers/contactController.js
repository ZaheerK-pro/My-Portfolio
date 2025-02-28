const { createContact } = require('../models/contact');

const handleContactForm = async (req, res) => {
  try {
    const contact = await createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

module.exports = { handleContactForm };
