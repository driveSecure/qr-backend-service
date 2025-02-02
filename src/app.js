const express = require('express');
const config = require('../config/config');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const morgan = require('morgan');

// Logging middleware
if (config.env === 'development') {
  app.use(morgan('dev'));
}

const routes = require('./routes/index.js');

app.use('/api', routes);

module.exports = app;