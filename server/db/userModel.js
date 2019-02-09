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

client.query(
  `CREATE TABLE IF NOT EXISTS users
    (
      id serial PRIMARY KEY,
      f_name VARCHAR(100),
      l_name VARCHAR(100),
      username text UNIQUE NOT NULL,
      email text UNIQUE,
      password text NOT NULL,
      created TIMESTAMP NOT NULL
  );`
)
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))

userModel.verify = async (req) => {
  const { username, password, email } = req.body;
  console.log(req.body, 'in sign in')
  return client.query(`SELECT * FROM users WHERE username = '${username}'`)
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

//By default node-postgres reads rows and collects them into JavaScript objects with the keys matching the column names and the values matching the corresponding row value for each column
userModel.createUser = async (req, res) => {
  const { f_name, l_name, username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  // CREATE TABLE users if it doesn't exist
  // a unique psql id and date_created value should be returned
  let created = '014-03-11 19:39:40';
  return client.query
    (`INSERT INTO users (
        f_name, l_name, username, email, password, created)
      VALUES (
        '${f_name}', '${l_name}', '${username}', '${email}', '${hash}', '${created}')
      RETURNING id, created`)
    .then((result) => {
      //req object is read-only
      //create property on res object to store psql-generated uuid
      return true;

//   return client.query(`INSERT INTO users (f_name, l_name, username, email, password) VALUES ('${f_name}', '${l_name}', '${username}', '${email}', '${hash}')`)
//     .then((res) => {
//       return true;
//     })
//     .catch((err) => {
//       console.log('ERROR with creating user in database', err);
//       return false;
    })
    .catch((err) => {
      console.log('ERROR with creating user in database', err);
      return false;
    });
};

module.exports = userModel;
