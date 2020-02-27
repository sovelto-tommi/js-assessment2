# SQL-tiedostot

## Tehtävä

Hakemistossa on kolme SQL-tiedostoa, niistä kahteen vaaditaan muutoksia:

- `schema.sql`: tähän *scooters* taulun luontikomennot
- `data.sql`: tähän datan alustus *scooters* tauluun

Älä kuitenkaan poista *models* tauluun liittyviä asioita, eli vain lisää pyydetyt asiat tiedostoihin.

## Tiedostojen käyttö

Tarkoituksena on, että tiedostojen käyttö on seuraava - heti projektin kloonaamisen jälkeen. Tulostukset, jotka on näytetty ovat jos tiedostoja ei muuta. Tiedosto `createdb.sql` on tarkoitus ajaa vain kerran, muut tiedostot voi ajaa kun niitä on muutettu.

```
P:\>psql -U oppilas
Password for user oppilas:
psql (11.5)
Type "help" for help.

myusername=> \i sql/createdb.sql
CREATE DATABASE
You are now connected to database "scooters" as user "oppilas".
scooters=> \i sql/schema.sql
CREATE TABLE
scooters=> \i sql/data.sql
DELETE 0
ALTER SEQUENCE
INSERT 0 3
scooters=>
```

Tiedostojen avulla siis

1. luodaan tietokanta (`createdb.sql`),
2. luodaan kantaan taulut (`schema.sql`), ja
3. alustetaan tauluihin tietoa (`data.sql`).