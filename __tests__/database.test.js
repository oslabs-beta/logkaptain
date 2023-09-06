const fs = require('fs');
const path = require('path');
const db = require('../server/connections/db.js') // require where the information for pool is

// test json file
const testJsonFile = path.resolve(__dirname, './test.json') // location of test json file 

describe('Testing Database', () => {
  
  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), () => {
      db.reset(); 
      done(); 
    })
  })

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify({}), done); 
  })

  describe('test function 1', () => {
    // test function 1;
  })

});