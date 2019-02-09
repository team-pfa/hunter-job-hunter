const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./db/userModel');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/signin', userController.verify, sessionController.startSession, (req, res, next) => {
  if (res.locals.result) res.status(200).send('user is legit and session created!');
  else res.status(404).send('could not find username and/or password');
});

app.get('/secret', sessionController.isLoggedIn, (req, res, next) => {
  res.status(200).send('secret page!');
})

app.post('/signup', userController.signup, (req, res, next) => {
  if (res.locals.result) res.status(200).send('USER SUCCESSFULLY CREATED!');
  else res.status(404).send('SHENANIGANS :(');
});

app.listen(3000);
