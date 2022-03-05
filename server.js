const express = require('express');
const app = express();

app.get(['/', '/health'], (req, res) => {
  res.json(process.env.NODE_ENV);
})

module.exports = app;