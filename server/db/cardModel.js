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
    `CREATE TABLE IF NOT EXISTS cards
        (
            card_id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            company VARCHAR(100) NOT NULL,
            description VARCHAR(500),
            location TEXT,
            link TEXT,
            salary TEXT,
            notes VARCHAR(100),
            created_date TIMESTAMP DEFAULT NOW(),
            last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
        );`
  )
    .then(res => {
        return res
    })
    .catch(e => console.error(e.stack))

//create a new card that is tied to a unique user
cardModel.createCard = async (req, res) => {
    const { jobTitle, company, jobDescription, jobLocation, url, salaryRange, note } = req.body;
    return client.query
    (
        `INSERT INTO cards (
            title, company, description, location, link, salary, notes
        )
        VALUES (
            '${jobTitle}', '${company}', '${jobDescription}', '${jobLocation}', '${url}', '${salaryRange}', '${note}'
        )`
    )
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log('ERROR with creating card in database', err);
        return false;
      });
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
