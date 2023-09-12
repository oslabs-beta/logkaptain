const cookieController = {};

//store user id in cookie with the value from res.locals.id
//if the user is not logged in, the cookie should not be set
cookieController.setCookie = async (req, res, next) => {
  //extract the id from res.locals
  try {
    const { id } = res.locals;
    console.log('id', id);
    await res.cookie('ssid', id, { httpOnly: false });
    res.cookie('sample', 'hello');
    // res.cookie('ssid', res.locals.id, { httpOnly: true });
    return next();
  } catch (err) {
    return next({
      log: `an error occured in cookieController.setCookie ${err}`,
      message: { err: 'unable to set cookie' },
    });
  }
};

module.exports = cookieController;
