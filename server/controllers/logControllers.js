const db = require('../models/models');

const logController = {};

//Expects data in req.body of format { username, timestamp, log }
//Outputs data in res.locals.createdLog
logController.createLog = async (req, res, next) => {
  const { username, timestamp, log } = req.body; //Will we need username here?
  try {
    const createdLog = await db.create({ timestamp, log });
    res.locals.createdLog = createdLog;
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in createLog error: ${err}`,
      status: 400,
      message: { err: 'An error occurred while trying to create a log.' },
    });
  }
};

module.exports = logController;
