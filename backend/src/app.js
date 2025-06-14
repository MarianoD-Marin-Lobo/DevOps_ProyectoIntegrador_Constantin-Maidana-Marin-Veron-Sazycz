// backend/src/app.js
const express = require('express');
const cors = require('cors'); // <--- ¡Añadir esta línea!
const todoRoutes = require('./routes/todos');

const app = express();

// ##############################################################
// INICIO DE CÓDIGO CORS - MOVER ESTO AQUÍ Y ELIMINARLO DE index.js
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // El origen de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // <--- Aplicar CORS JUSTO AQUÍ, después de inicializar app
// FIN DE CÓDIGO CORS
// ##############################################################

app.use(express.json()); // Esto puede venir después de CORS

app.use('/api/todos', todoRoutes); // Tus rutas de la API

module.exports = app;