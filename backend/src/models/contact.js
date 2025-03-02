const pool = require('../config/database');

const createContact = async ({ name, email, number, message }) => {
  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, number, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, number, message]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Database Insert Error:', error);
    throw new Error('Database Error: Could not save contact');
  }
};

const getAllContacts = async () => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY id DESC');
    return result.rows;
  } catch (error) {
    console.error('Database Fetch Error:', error);
    throw new Error('Database Error: Could not fetch contacts');
  }
};

module.exports = { createContact, getAllContacts };
