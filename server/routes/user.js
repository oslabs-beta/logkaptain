// routes
const express = require('express');
const router = express.Router();
//const logController = require('../controllers/logControllers');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
//const cookieController = require('../controllers/cookieController');

// router.post('/logs', logController.createLog, (req, res) => {
//   res.status(200).json(res.locals.createdLog);
// });

router.post(
  '/login',
  userController.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    res.status(200).json(res.locals.successful);
  }
);

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.successful);
});

// router.get('/logs', logController.getLogs, (req, res) => {
//   res.status(200).json(res.locals.logs);
// });

//:id is a placeholder
// router.patch('/logs/:id', logController.patchLogs, (req, res) => {
//   res.status(200).json(res.locals.updatedLog);
// });

// router.delete('/logs/:id', logController.deleteLogs, (req, res) => {
//   res.status(200).json(res.locals.deletedLog);
// });

module.exports = router;
