const express = require('express');
const todoRoutes = require('./routes/todos');

const app = express();

app.use(express.json());
app.use('/api/todos', todoRoutes); // Tus rutas de la API

module.exports = app;
