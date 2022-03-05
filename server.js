const express = require('express');
const app = express();

app.get(['/', '/health'], (req, res) => {
  res.json(process.env.SECRET);
})

module.exports = app;