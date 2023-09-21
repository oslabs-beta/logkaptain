// routes
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');

router.post('/logs', logController.createLog, (req, res) => {
  return res.status(200).json(res.locals.createdLog);
});

router.get('/logs', logController.getLogs, (req, res) => {
  return res.status(200).json(res.locals.logs);
});

//:id is a placeholder
router.patch('/logs/:id', logController.patchLogs, (req, res) => {
  return res.status(200).json(res.locals.updatedLog);
});

router.delete('/logs/:id', logController.deleteLogs, (req, res) => {
  return res.status(200).json(res.locals.deletedLog);
});

module.exports = router;
