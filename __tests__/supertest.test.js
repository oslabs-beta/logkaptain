const fs = require('fs');
const path = require('path'); 
const request = require('supertest'); 

const server = 'http://localhost:3000'; // double check the port

describe('Testing Server', () => {

  describe('Starting backend server', () => {
    it('Get / responds with 404 status with text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(404); 
    }) 
  })
});


xdescribe('Testing Routers', () => {

  describe('Testing Signup', () => {
    it('respond with a 204 status', () => {
      return request(server)
        .post('user/signup')
        .expect(204); 
    });
  });

  describe('Testing Login', () => {
    it('respond with a 200 status', () => {
      return request(server)
        .post('user/login')
        .expect(200); 
    });
  });

  xdescribe('Testing Forgot Password', () => {
    describe('Testing Login', () => {
      it('respond with a 200 status', () => {
        return request(server)
          .patch('user/login')
          .expect(200); 
      });
    });
  });
});

describe('Testing Dashboard', () => {
  xdescribe('connect to cluster', () => {
    
  });

  describe('Getting logs', () => {
    // get request? 
    it('retrieve logs from Kubernetes cluster', () => {
      return request(server)
        .get('/logs')
        .expect(200);
    })
  });

  xdescribe('Saving logs', () => {
    // patch request? 
    it('save user specified logs from Kubernetes cluster' , () => {
      return request(server)
        .patch('/logs')
        .expect(200);
    })
  });

  // post request?
  describe('Post Req logs', () => {
    it('perform a post request on logs(?)', () => {
      return request(server)
      .post('/logs')
      .expect(200);
    })
  })

  xdescribe('Removing logs', () => {
    // delete request? 
    it('perform a delete request on logs(?)', () => {
      return request(server)
      .delete('/logs')
      .expect(200);
    })
  });

  xdescribe('Filtering system', () => {
    // get request
  });

  xdescribe('export logs', () => {

  });
})
