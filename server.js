const express = require('express');
const app = express();

app.get(['/', '/health'], (req, res) => {
  res.json('OK');
})

module.exports = app;