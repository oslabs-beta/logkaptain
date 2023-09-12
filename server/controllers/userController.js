const db = require('../models/models.js');
const bcrypt = require('bcrypt');

const getUserByUsername = async (username) => {
  const queryString = 'SELECT * FROM users WHERE username = $1';
  const value = [username];
  const records = await db.query(queryString, value);
  return records.rows[0];
};

const userController = {};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  // first, confirm we have what we need in the body
  try {
    if (!username || !password) {
      res.locals.successful = {
        created: false,
        message: 'username and password are required',
      };
      return next();
    }
  } catch (err) {
    return next({ log: 'Error in createUser' });
  }

  // second, confirm that the username is not already in the DB
  try {
    const userData = await getUserByUsername(username);
    if (userData) {
      res.locals.successful = {
        created: false,
        message: 'username already exists',
      };
      return next();
    }
  } catch (err) {}

  // finally, salt and hash the password, then write to the DB
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const queryString = 'INSERT INTO users (username, password) VALUES ($1, $2)';
  const value = [username, hashedPassword];

  try {
    await db.query(queryString, value);
    res.locals.successful = {
      created: true,
      message: 'user created',
      username: username,
    };
    return next();
  } catch (err) {
    return next({ log: 'Error in createUser' });
  }
};

userController.verifyUser = async (req, res, next) => {
  console.log('entering the verifyUser middleware');
  const { username, password } = req.body;

  try {
    const userData = await getUserByUsername(username);

    // if username not in DB, return error
    if (userData === undefined) {
      res.locals.sucessful = { verify: false, message: 'username not found' };
      return next();
    }

    // check that the password is correct
    const hashedPassword = userData.password;

    // try catch to compare if user enters the correct password
    try {
      console.log(password, hashedPassword);
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
      // if it doesnt match, return err
      if (!isPasswordCorrect) {
        res.locals.successful = {
          verify: false,
          message: 'username and/or password incorrect',
        };
        return next();
      }
      // if passsword is correct, go to next controller
      res.locals.successful = {
        verify: true,
        message: 'user verify',
        username: username,
      };
      return next();
    } catch (err) {
      return next({ log: 'bcrypt compare error' });
    }
  } catch (err) {
    return next({ log: 'Error in verifyUser' });
  }
};

// salt will be "junkomanjiko"

module.exports = userController;
