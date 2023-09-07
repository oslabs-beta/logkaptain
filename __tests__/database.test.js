const db = require('../server/models/models.js') // require where the information for pool is

describe('Testing SQL Database', () => {

  let client;

  // afterAll(() => {
  //   client.release(); 
  // })

  it('should successfully connect to the database', async () => {
    client = await db.query('SELECT NOW()');
    expect(client.rowCount).toBeGreaterThan(0);
    // client.release(); // I think we need client.release.. however it works without.... client.release() is not a function...
  })

  it('should handle database errors', async () => {
    try {
      await db.query('Select * FROM non_existent_table'); 
    } catch (err) {
      expect(err).toBeDefined(); 
    }
  })
});

//testing connection to kubernetes API? 