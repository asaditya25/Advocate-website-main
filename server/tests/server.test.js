// Basic test placeholder for Express server
const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return 404 for root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(404);
  });
});
