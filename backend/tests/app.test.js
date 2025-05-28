const request = require('supertest');
const app = require('../src/app');

describe('GET /api/todos', () => {
  it('responds with an array', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});