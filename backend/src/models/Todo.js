// const mongoose = require('mongoose');

// const TodoSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   done: { type: Boolean, default: false },
// });

// module.exports = mongoose.model('Todo', TodoSchema);


// backend/src/app.js
const express = require('express');
const mongoose = require('mongoose'); // Lo necesitas para definir esquemas/modelos, pero no para conectar aquí
const todoRoutes = require('../routes/todo'); // Asumo que tus rutas están en backend/routes/todo.js

const app = express();

// Middlewares que se aplican a tu app Express
app.use(express.json()); // Para parsear el cuerpo de las peticiones en JSON
app.use('/api/todos', todoRoutes); // Tus rutas de la API

// IMPORTANTE: NO ponga mongoose.connect() ni app.listen() aquí.
// Estas acciones (conectar a DB e iniciar servidor) deben ser manejadas
// por el punto de entrada principal (index.js) cuando la app se ejecuta
// en producción/desarrollo, o por los tests cuando se ejecutan pruebas.

module.exports = app; // Exporta solo la instancia de la aplicación Express