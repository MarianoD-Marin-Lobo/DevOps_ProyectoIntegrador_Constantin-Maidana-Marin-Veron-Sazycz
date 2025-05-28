const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/todos');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todos', routes);

mongoose.connect('mongodb://mongo:27017/tododb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;