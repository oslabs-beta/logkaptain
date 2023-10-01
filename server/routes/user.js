// routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

router.post(
  '/login',
  userController.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json(res.locals.successful);
  }
);

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.successful);
});

module.exports = router;
