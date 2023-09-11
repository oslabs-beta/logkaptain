const db = require('../models/models.js');
const bcrypt = require('bcryptjs');

const authController = {};

authController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const queryString = 'SELECT * FROM users WHERE username = $1';
    const userData = await db.query(queryString);

    //if nothing is returned, means not user found
    if (userData.rows.length === 0) {
      return next({
        log: 'Error: User not found',
      });
    }

    //there should be only 1 user with that username and now i'm grabbing the hashed password
    const hashedPassword = userData.rows[0].password;

    // try catch to compare if user enters the correct password
    try {
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      // if it doesnt match, return err
      if (!passwordMatch) {
        res.locals.successful = false;
        return next({ log: 'incorrect username or password' });
      }
      // if successful, go to next controller
      res.locals.successful = true;
      res.locals.username = username;
      return next();
    } catch (err) {
      return next({ log: 'bcrypt compare error' });
    }
  } catch (err) {
    return next({ log: 'Error in verifyUser' });
  }
};

module.exports = authController;
