const pg = require('pg');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const uri = 'postgres://pfa:pfa@localhost/jobs_db';
const client = new pg.Client(uri);

client.connect((err) => {
  if (err) {
    console.log('ERROR: could not connect to postgres');
    throw err;
  }
  console.log('connected to the psql db!');


});

const userModel = {};

userModel.verify = async (req) => {
  const { username, password, email } = req.body;
  return client.query(`SELECT * FROM users WHERE username = '${username}' OR email = '${email}'`)
    .then((res) => {
      if (bcrypt.compareSync(password, res.rows[0].password)) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log('ERROR with querying database', err);
      return false;
    });
};

userModel.createUser = async (req, res) => {
  const { f_name, l_name, username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return client.query(`INSERT INTO users (f_name, l_name, username, email, password) VALUES ('${f_name}', '${l_name}', '${username}', '${email}', '${hash}')`)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log('ERROR with creating user in database', err);
      return false;
    });
};

module.exports = userModel;
