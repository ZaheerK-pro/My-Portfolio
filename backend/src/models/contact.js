const pool = require('../config/database');

const createContact = async (contact) => {
  const { name, email, number, message } = contact;
  const result = await pool.query(
    'INSERT INTO contacts (name, email, number, message) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, number, message]
  );
  return result.rows[0];
};

module.exports = { createContact };
