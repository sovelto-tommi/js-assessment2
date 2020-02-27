const Pool = require('pg').Pool;
const debug = require('debug')('assessment2:pgdao');
const Scooter = require('./scooter');

// TODO: tämä vaatii .env tiedoston (projektin juureen)
require('dotenv').config();
// Käyttäjätunnus ja salasana .envistä
const USER = process.env.PGUSER;
const PASSWORD = process.env.PGPASSWORD;

/* Toteuta seuraavat kolme funktiota
   Lisää tarvittavat parametrit funktioille
*/
// <toteuta>
function getAllScooters() {
  return pool.query('SELECT * FROM scooters')
  .then(res => res.rows.map(s => 
    new Scooter(s.id, s.model, s.lat, s.lon, s.max_electricity, s.current_electricity, s.added)
    ))
  .catch(err =>
      setImmediate(() => {
        throw err
      })
    )
}

function getSingleScooter(id) {
  return pool.query('SELECT scooters.*, models.name modelname FROM scooters JOIN models ON scooters.model=models.id WHERE scooters.id=$1::numeric', [id])
  .then(res => res.rows.map(s =>
    new Scooter(s.id, s.model, s.lat, s.lon, s.max_electricity, s.current_electricity, s.added, s.modelname)
  )[0])
  .catch(err =>
      setImmediate(() => {
        throw err
      })
    )
}

function saveScooter(scooter) {
  debug(scooter)
  const pos = scooter.position || {lat: null, lon: null}
  const params = [scooter.model, pos.lat, pos.lon, scooter.electricity.max, scooter.electricity.current, scooter.added]
  debug(params);
  return pool.connect().then(client => {
    return client.query('INSERT INTO scooters(model, lat, lon, max_electricity, current_electricity, added) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',params)
    .then(res => res.rows.map(s =>
      new Scooter(s.id, s.model, s.lat, s.lon, s.max_electricity, s.current_electricity, s.added)
    )[0])
    .catch(err => {
      debug(`Error: ${err.message}\n${err.stack}`);
      throw err;
    })
  })
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

module.exports = {getAllModels, getAllScooters, getSingleScooter, saveScooter};
