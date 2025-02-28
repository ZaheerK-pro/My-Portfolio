const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// API Routes
app.use('/api', contactRoutes);

module.exports = app;
