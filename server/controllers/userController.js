const User = require('../db/userModel');

const userController = {};

userController.verify = async (req, res, next) => {
  const result = await User.verify(req);
  res.locals.result = result;
  next();
};

userController.signup = async (req, res, next) => {
//   console.log(req.body)
//   if (!req.body.username || !req.body.password) res.errors = true;
//   else {
//     res.errors = false;
//     const result = await User.create(req);
//     res.locals.result = result;
//   }
//   return next();

  if (!req.body.username || !req.body.password) res.status(404).send('YOU MUST FILL OUT BOTH USERNAME AND PASSWORD');
  const result = await User.createUser(req);
  res.locals.result = result;
  next();
};

module.exports = userController;
