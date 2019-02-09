const User = require('../db/userModel');

const userController = {};

userController.verify = async (req, res, next) => {
  const result = await User.verify(req);
  res.locals.result = result;
  next();
};

userController.startSession = async (req, res, data) => {
  const response = await User.create({
    cookieId: data._id,
  });
  return response;
};

userController.isLoggedIn = async (req, res) => {
  const { ssid } = req.cookies;
  if (!ssid) return null;
  const authorized = await sessionStorage.findOne({
    cookieId: ssid,
  });
  return authorized;
};

userController.signup = async (req, res, next) => {
  console.log(req.body)
  if (!req.body.username || !req.body.password) res.errors = true;
  else {
    res.errors = false;
    const result = await User.create(req);
    res.locals.result = result;
  }
  return next();
};

module.exports = userController;
