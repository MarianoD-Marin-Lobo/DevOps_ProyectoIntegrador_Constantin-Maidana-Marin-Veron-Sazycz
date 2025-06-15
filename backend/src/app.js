const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();


const corsOptions = {
    origin: 'http://127.0.0.1:5500', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); 

app.use(express.json());

app.use('/api/todos', todoRoutes);

module.exports = app;
