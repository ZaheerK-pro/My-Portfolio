const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('../backend/src/config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://127.0.0.1:5502',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('E:/My Portfolio/index.html');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, number, message } = req.body;

    if (!name || !email || !number || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await pool.query(
      'INSERT INTO contacts (name, email, number, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, number, message]
    );

    res.status(201).json({ success: true, message: "Contact saved successfully", data: result.rows[0] });
  } catch (error) {
    console.error('Database Insert Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY id DESC');
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Database Fetch Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
