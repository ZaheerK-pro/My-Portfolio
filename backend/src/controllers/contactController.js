const { createContact, getAllContacts } = require('../models/contactModel');

const handleContactForm = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    
    if (!name || !email || !number || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = await createContact({ name, email, number, message });
    res.status(201).json({ success: true, message: 'Contact saved', data: contact });
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { handleContactForm, getContacts };
