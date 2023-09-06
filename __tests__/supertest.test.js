const fs = require('fs');
const path = require('path'); 
const request = require('supertest'); 

const server = 'http://localhost:5173'; // double check the port

xdescribe('Testing Server', () => {

  describe('Starting server', () => {
    it('responds with 200 status with text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-type', /text\/html/)
        .expect(200); 
    }) 
  })

});

xdescribe('Testing Frontpage', () => {

  describe('Testing Signup', () => {
    it('respond with a 204 status', () => {
      return request(server)
        .post('/signup')
        .expect(204); 
    });
  });

  describe('Testing Login', () => {
    it('respond with a 200 status', () => {
      return request(server)
        .post('/login')
        .expect(200); 
    });
  });

  describe('Testing Forgot Password', () => {
    describe('Testing Login', () => {
      it('respond with a 200 status', () => {
        return request(server)
          .patch('/login')
          .expect(200); 
      });
    });
  });
});

xdescribe('Testing Dashboard', () => {
  describe('connect to cluster', () => {

  });

  describe('Getting logs', () => {
    // get request? 
    it('retrieve logs from Kubernetes cluster', () => {

    })
  });

  describe('Saving logs', () => {
    // patch request? 
    it('save user specified logs from Kubernetes cluster' , () => {

    })
  });

  // post request?
  describe('Post Req logs', () => {
    it('perform a post request on logs(?)', () => {

    })
  })

  describe('Removing logs', () => {
    // delete request? 
  });

  describe('Filtering system', () => {
    // get request
  });

  describe('export logs', () => {

  });
})