const jwt = require('jsonwebtoken');
const User = require('../db/userModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
    const jwtPayload = { username : req.body.username };
    console.log('session created!')
    res.cookie('ssid', jwt.sign(jwtPayload, 'JWT_SECRET_KEY', { expiresIn: 30000 }), { HttpOnly: true });
    next();
};

sessionController.isLoggedIn = async (req, res, next) => {
  const { ssid } = req.cookies;
  if (!ssid) return null;
  try {
    jwt.verify(ssid, 'JWT_SECRET_KEY')
    console.log('verified session!');
    next();
  } catch(err) {
    console.log('expired token')
    res.redirect('http://localhost:3000/');
  }
};

module.exports = sessionController;