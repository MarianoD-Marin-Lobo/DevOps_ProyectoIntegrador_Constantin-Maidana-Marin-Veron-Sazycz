// const request = require('supertest');
// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const app = require('../index');;
// const Todo = require('../src/models/Todo');

// let mongoServer;

// beforeAll(async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const uri = mongoServer.getUri();

//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// afterAll(async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await mongoServer.stop();
// });

// beforeEach(async () => {
//   await Todo.deleteMany({});
//   await Todo.create([{ title: 'Test 1' }, { title: 'Test 2' }]);
// });

// describe('GET /api/todos', () => {
//   it('responds with an array', async () => {
//     const res = await request(app).get('/api/todos');
//     expect(res.statusCode).toBe(200);
//     expect(Array.isArray(res.body)).toBe(true);
//     expect(res.body.length).toBe(2);
//   });
// });


// tests/app.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app'); // <-- IMPORTANTE: Importa directamente 'src/app' para obtener la instancia de Express
const Todo = require('../src/models/Todo'); // <-- ¡CORREGIDA LA RUTA PARA TU MODELO TODO! (Mayúscula en Models, sin .js)

let mongoServer;

// Antes de que se ejecuten todas las pruebas
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, { // Conecta Mongoose a la base de datos en memoria para los tests
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}, 60 * 1000);

// Antes de cada prueba (opcional, pero buena práctica para limpiar datos)
beforeEach(async () => {
  await Todo.deleteMany({}); // Limpiar la base de datos en memoria antes de cada prueba
});

// Después de que todas las pruebas se hayan ejecutado
afterAll(async () => {
  await mongoose.disconnect(); // Desconectar de Mongoose
  await mongoServer.stop(); // Detener el servidor en memoria
});

// Puedes necesitar 'supertest' para hacer peticiones HTTP a tu app
const request = require('supertest'); // Asegúrate de tener supertest instalado como devDependency

describe('Todo API', () => {
  it('should create a new todo', async () => {
    // Ejemplo de prueba usando supertest
    const res = await request(app) // 'app' es la instancia de Express que importamos
      .post('/api/todos')
      .send({
        text: 'Test Todo',
      });
    expect(res.statusCode).toEqual(201); // O el código que esperes al crear un Todo
    expect(res.body.text).toEqual('Test Todo');
    // ... más aserciones
  });

  // ... tus otras pruebas
}, 10 * 1000);