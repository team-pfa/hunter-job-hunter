const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/userModel');
const userController = require('./controllers/userController');

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // console.log(req.body)
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/signin', userController.verify, (req, res, next) => {
  if (res.locals.result) res.status(200).redirect('../userpage.html');
  else res.status(404).send('could not find username and/or password');
});

app.post('/signup', userController.signup, (req, res, next) => {
  console.log('here we are', req.body);
  if (res.locals.result) res.status(200).send('USER SUCCESSFULLY CREATED!');
  else res.status(404).send('SHENANIGANS :(');
});

app.listen(3000);
