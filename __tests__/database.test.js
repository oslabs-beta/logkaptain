const db = require('../server/models/models.js') // require where the information for pool is


/**
 * Currently tests the actual SQL database to make sure that the connection works.
 *
 * TODO: Convert testing functions to test the middleware of express servers using a **MOCK** database
 */
describe('Testing SQL Database', () => {

  let client;

  describe('Testing Database Functionality', () => {
		// Tests to see if we're making a connection to the database and pulling all the row from the database... if there are objects in the database rowCount will not be zero
    it('should successfully connect to the database', async () => {
      client = await db.query('SELECT NOW()');
      expect(client.rowCount).toBeGreaterThan(0);
      // client.release(); // I think we need client.release.. however it works without.... client.release() is not a function...
    })
  
		// Tests to see if we get an error from the database... NOTE: This will not work if there's a table called 'non_existent_table'
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

		// tests the INSERT query and expects userInfo to be in the database
		// NOTE: THIS TEST MUST WORK FOR OTHER TESTS TO WORK; 
    it('should be able to create data', async () => {
      try {
        client = await db.query(`INSERT INTO users (username, password) VALUES ('${userInfo.username}', '${userInfo.password}')`); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
      expect(client.command).toBe('INSERT');
    });

		// tests the SELECT query and pulls that information
		// looks for an entry with a specfic username (from userInfo)
    it('should be able to read data', async () => {
      try {
        client = await db.query(`SELECT * FROM users WHERE username='${userInfo.username}'`); 
      } catch (err) {
        console.log(err); 
      }
      expect(client).toBeDefined();
      expect(client.command).toBe('SELECT');
      expect(client.rowCount).toBeGreaterThan(0); 
      expect(client.rows[0].username).toBe(`${userInfo.username}`);
      expect(client.rows[0].password).toBe(`${userInfo.password}`);
    });

		// tests the UPDATE feature
		// sends an update request requesting the username to change the password to No1CanCompare
		// TODO: add a test feature where calls SELECT and expect password to be No1CanCompare
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

		// tests the DELETE query
		// deletes the fake entry we made for the tests using username from userInfo
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

	// Does not work... These were built in anticipation for kubernetesbut is not built out. 
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
