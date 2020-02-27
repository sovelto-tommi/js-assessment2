const Pool = require('pg').Pool;
const debug = require('debug')('assessment2:pgdao');

// TODO: tämä vaatii .env tiedoston (projektin juureen)
require('dotenv').config();
// Käyttäjätunnus ja salasana .envistä
const USER = process.env.PGUSER;
const PASSWORD = process.env.PGPASSWORD;

/* Toteuta seuraavat kaksi funktiota
   Lisää tarvittavat parametrit funktioille
*/
// <toteuta>
function getAllScooters() {

}

function getSingleScooter() {

}

// </toteuta>


// Alla olevaan koodiin ei pitäisi tarvita koskea

const conopts = {
    user: USER,
    password: PASSWORD,
    host: 'localhost',
    database: 'scooters',
    port: 5432
};

const pool = new Pool(conopts);

process.on('exit', () => {
	debug("\n\n*** Ending pool when exiting");
	pool.end();
});

function getAllModels() {
    return pool.query('SELECT * FROM models')
        .then(res => res.rows)
        .catch(err =>
            setImmediate(() => {
              throw err
            })
          )
}

module.exports = {getAllModels, getAllScooters, getSingleScooter};
