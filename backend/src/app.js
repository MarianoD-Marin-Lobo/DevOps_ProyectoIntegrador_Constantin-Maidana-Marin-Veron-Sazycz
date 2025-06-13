// backend/src/app.js
const express = require('express');
// const mongoose = require('mongoose'); // No necesario aquí para la app instance
const todoRoutes = require('./routes/todos'); // <-- ¡Asegúrate de que esta línea esté presente y correcta!

const app = express();

app.use(express.json());
app.use('/api/todos', todoRoutes); // Tus rutas de la API

module.exports = app;