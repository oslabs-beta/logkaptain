const db = require('../server/models/models.js') // require where the information for pool is

describe('Testing SQL Database', () => {

  let client;

  describe('Testing Database Functionality', () => {
    it('should successfully connect to the database', async () => {
      client = await db.query('SELECT NOW()');
      expect(client.rowCount).toBeGreaterThan(0);
      // client.release(); // I think we need client.release.. however it works without.... client.release() is not a function...
    })
  
    it('should handle database errors', async () => {
      try {
        await db.query('SELECT * FROM non_existent_table'); 
      } catch (err) {
        expect(err).toBeDefined(); 
      }
    })
  })

  describe('Testing User Database', () => {

    // CREATE TABLE users (
    //   id SERIAL PRIMARY KEY,
    //   username VARCHAR(255) NOT NULL,
    //   password VARCHAR(255) NOT NULL
    // );

    const userInfo = {username: OSP1, password: isDaBest123 }

    //TODO: 
    xit('should be able to create data', async () => {
      try {
        client = await db.query('INSERT INTO users (username, password) VALUES (`fakeusername`, `fakepassword`'); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    });

    //TODO: 
    xit('should be able to read data', async () => {
      try {
        client = await db.query('SELECT * FROM users WHERE username='); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    });

    //TODO: 
    xit('should be able to update data', async () => {
      try {
        client = await db.query(); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    });

    //TODO:
    xit('should be able to delete data', async () => {
      try {
        client = await db.query(); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    })
  })

  describe('Testing Log Database', () => {

    // CREATE TABLE logTable (
    //   id SERIAL PRIMARY KEY,
    //   username VARCHAR(255) NOT NULL,
    //   timestamp TEXT,
    //   log TEXT
    // );
    
    //TODO: 
    xit('should be able to create data', async () => {
      try {
        client = await db.query(); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    });

    //TODO: 
    xit('should be able to read data', async () => {
      try {
        client = await db.query(); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    });

    //TODO: 
    xit('should be able to update data', async () => {
      try {
        client = await db.query(); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    });

    //TODO:
    xit('should be able to delete data', async () => {
      try {
        client = await db.query(); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
    })
  })
});

//testing connection to kubernetes API? 