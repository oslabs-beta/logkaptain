const { Pool } = require('pg'); //Pool class is used to manage connections to the database
const config = require('../config')

const pool = new Pool({
  connectionString: config.dbConnection,
}); //a new Pool instance

module.exports = {
  //invokes query method in the pool
  //required - text is the SQL query string
  //optional - params is array of query parameters, cb to handle query results
  query: (text, params, callback) => {
    console.log('Executed query: ', text);
    return pool.query(text, params, callback);
  },
};