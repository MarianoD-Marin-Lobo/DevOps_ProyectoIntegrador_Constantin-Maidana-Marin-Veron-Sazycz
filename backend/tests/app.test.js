const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app');
const Todo = require('../src/models/Todo');

let mongoServer;


beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}, 60 * 1000);


beforeEach(async () => {
  await Todo.deleteMany({}); 
});


afterAll(async () => {
  await mongoose.disconnect(); 
  await mongoServer.stop();
});


const request = require('supertest');

describe('Todo API', () => {
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({
        text: 'Test Todo',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.text).toEqual('Test Todo');

  });


}, 10 * 1000);