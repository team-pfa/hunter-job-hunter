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
if (!req.body.username || !req.body.password) res.status(404).send('YOU MUST FILL OUT BOTH USERNAME AND PASSWORD');
  const result = await User.createUser(req);
  res.locals.result = result;
  next();
};

module.exports = userController;
