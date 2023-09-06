const fs = require('fs');
const path = require('path'); 
const request = require('supertest'); 

const server = 'http://localhost:5173'; // double check the port

describe('Testing Supertest', () => {

  describe('Starting server (GET /)', () => {
    it('responds with 200 status with text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-type', /text\/html/)
        .expect(200); 
    }) 
  })
});