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

    // afterAll(async () => {
    //   await db.end();
    // })

    const userInfo = {username: "OSP1", password: "isDaBest123" };

    it('should be able to create data', async () => {
      try {
        client = await db.query(`INSERT INTO users (username, password) VALUES ('${userInfo.username}', '${userInfo.password}')`); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
      expect(client.command).toBe('INSERT');
    });

    it('should be able to read data', async () => {
      try {
        client = await db.query(`SELECT * FROM users WHERE username='${userInfo.username}'`); 
      } catch (err) {
        console.log(err); 
      }
      console.log(client);
      expect(client).toBeDefined();
      expect(client.command).toBe('SELECT');
      expect(client.rowCount).toBeGreaterThan(0); 
      expect(client.rows[0].username).toBe(`${userInfo.username}`);
      expect(client.rows[0].password).toBe(`${userInfo.password}`);
    });

    it('should be able to update data', async () => {
      try {
        client = await db.query(`UPDATE users set password='No1CanCompare' WHERE username='${userInfo.username}'`); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
      expect(client.command).toBe('UPDATE');
      expect(client.rowCount).toBeGreaterThan(0); 
    });

    it('should be able to delete data', async () => {
      try {
        client = await db.query(`DELETE FROM users WHERE username='${userInfo.username}'`); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
      expect(client.command).toBe('DELETE');
      expect(client.rowCount).toBeGreaterThan(0); 
    })
  })

  xdescribe('Testing Log Database', () => {

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