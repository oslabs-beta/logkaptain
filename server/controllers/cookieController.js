const cookieController = {};

//store user id in cookie with the value from res.locals.id
//if the user is not logged in, the cookie should not be set
cookieController.setCookie = async (req, res, next) => {
  try {
    res.cookie('ssid', res.locals.id, { httpOnly: true });
    return next();
  } catch (err) {
    return next({
      log: `an error occured in cookieController.setCookie ${err}`,
      message: { err: 'unable to set cookie' },
    });
  }
};

module.exports = cookieController;
