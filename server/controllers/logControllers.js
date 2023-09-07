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

//Expects data in req.body of format { username, id }
//Outputs data in res.locals.logs of format { id, username, timestamp, log }
logController.getLogs = async (req, res, next) => {
    const { username, id } = req.body; //CHECK THAT THIS IS HOW WE WILL GET LOGS? OR do we just need id?
  try {
  
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in getLogs error: ${err}`,
      status: 400,
      message: { err: 'An error occurred while trying to get a log.' },
    });
  }
}

//Expects data in req.body of format { id, username, timestamp, log }
//Outputs data in res.locals.updatedLog
logController.patchLogs = async (req, res, next) => {
    const { username, timestamp, log } = req.body; 
  try {
    
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in patchLogs error: ${err}`,
      status: 400,
      message: { err: 'An error occurred while trying to patch a log.' },
    });
  }
}
//Expects data in req.body of format { username, id }
//Outputs data in res.locals.deletedLog
logController.deleteLogs = async (req, res, next) => {
    const { username, timestamp, log } = req.body; 
  try {
    
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in deleteLogs error: ${err}`,
      status: 400,
      message: { err: 'An error occurred while trying to delete a log.' },
    });
  }
}


module.exports = logController;
