const { Pool } = require('pg'); //Pool class is used to manage connections to the database
const { dbConnection } = require('../connections/db'); //Imports the db connection
const config = require('../config')

const pool = new Pool({
  //connectionString: dbConnection,
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