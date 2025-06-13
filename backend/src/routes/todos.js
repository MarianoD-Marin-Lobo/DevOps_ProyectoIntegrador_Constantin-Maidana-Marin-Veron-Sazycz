// const express = require('express');
// const Todo = require('../models/Todo');
// const router = express.Router();

// router.get('/', async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

// router.post('/', async (req, res) => {
//   const todo = new Todo({ text: req.body.text });
//   await todo.save();
//   res.status(201).json(todo);
// });

// router.put('/:id', async (req, res) => {
//   const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(todo);
// });

// router.delete('/:id', async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.status(204).end();
// });

// module.exports = router;

// backend/src/routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // <-- La ruta corregida para importar tu modelo Todo

// Ruta para obtener todos los Todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear un nuevo Todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ... otras rutas (PUT, DELETE, etc.)

module.exports = router;