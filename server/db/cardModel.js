const pg = require('pg');

const uri = 'postgres://pfa:pfa@localhost/jobs_db';
const client = new pg.Client(uri);

client.connect((err) => {
  if (err) {
    console.log('ERROR: could not connect to postgres');
    throw err;
  }
  console.log('connected to the psql db!');

});

const cardModel = {};

client.query(
    `CREATE TABLE IF NOT EXISTS users
        (   
            card_id SERIAL PRIMARY KEY,
            uuid INTEGER NOT NULL,
            title VARCHAR(100) NOT NULL, 
            company VARCHAR(100) NOT NULL, 
            description VARCHAR(500), 
            location TEXT UNIQUE NOT NULL, 
            link TEXT, 
            salary TEXT NOT NULL,
            notes VARCHAR(100),
            created_date TIMESTAMP NOT NULL,
            last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL  
        
        );`
  )
    .then(res => {
        // console.log(res.rows[0]);
        console.log(res)
    })
    .catch(e => console.error(e.stack))

//create a new card that is tied to a unique user 
cardModel.createCard = async (req, res) => {
    // const { title, company, desc, location, link, salary, notes } = req.body;
    // let created_date = Date();
    // return client.query
    // (
    //     `INSERT INTO cards (
    //         title, company, desc, location, link, salary, notes, created_date) 
    //     VALUES (
    //         '${title}', '${company}', '${desc}', '${location}', '${link}', '${salary}', '${notes}', '${created_date}', '${last_updated}')`
    // )
    //   .then((res) => {
    //     return true;
    //   })
    //   .catch((err) => {
    //     console.log('ERROR with creating card in database', err);
    //     return false;
    //   });
  };

cardModel.updateCard = async (req, res) => {
    // const { title, company, desc, location, link, salary, notes } = req.body;
    // let updated = Date();
    // return client.query
    //     (
    //         `UPDATE cards SET 
    //             title = title, company = company, desc = desc, location = location, link = link, salary = salary, notes = notes) 
    //         VALUES (
    //             '${title}', '${company}', '${desc}', '${location}', '${link}', '${salary}', '${notes}', '${updated}')`
    //     )
    //     .then((res) => {
    //     return true;
    //     })
    //     .catch((err) => {
    //     console.log('ERROR with updating card in database', err);
    //     return false;
    //     });
    };

//DELETE row in cards that match card_id
cardModel.deleteCard = async (req, res) => {
    // return client.query(`DELETE FROM cards WHERE card_id = card_id AND  = )`)
    //     .then((res) => {
    //     return true;
    //     })
    //     .catch((err) => {
    //     console.log('ERROR with deleting card in database', err);
    //     return false;
    //     });
    };

//DELETE all rows in cards that match given uuid
cardModel.deleteAllCards = async (req, res) => {
    // return client.query(`DELETE FROM cards WHERE uuid = uuid)`)
    //     .then((res) => {
    //     return true;
    //     })
    //     .catch((err) => {
    //     console.log('ERROR with deleting cards in database', err);
    //     return false;
    //     });
    };
    
//retrieve all rows in cards that match given uuid
cardModel.getCards = async (req, res) => {
    // return client.query(`SELECT * FROM cards WHERE uuid = uuid)`)
    //     .then((res) => {
    //     return true;
    //     })
    //     .catch((err) => {
    //     console.log('ERROR with getting cards from database', err);
    //     return false;
    //     });
    };

module.exports = cardModel;