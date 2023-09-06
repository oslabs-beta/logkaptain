const db = require('../server/models/models.js') // require where the information for pool is

describe('Testing SQL Database', () => {

  let client;

  // afterAll(() => {
  //   client.release(); 
  // })


  it('should successfully connect to the database', async () => {
    client = await db.query('SELECT NOW()');
    expect(client.rowCount).toBeGreaterThan(0);
    // client.release(); 
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