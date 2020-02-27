# Assessment testin palvelin

## Tehtävät

Tehtävänä toteuttaa kaikkien skuuttien haku, sekä yhden skuutin haku id:n perusteella.

### Tietokanta

Tietokannan alustamiseen käytetään SQL-tiedostoja, jotka
voidaan ajaa `psql`-ohjelmalla `\i` komennolla. Tämä osuus vaatii siis puhtaan SQL-koodin kirjoittamista. Tähän osuuteen löytyy lisää ohjeita [`sql`](sql/)-hakemistosta. Lyhyesti:

- Luo taulu, johon voi tallettaa skuutteja
- Alusta taulu muutamalla skuutilla

### Tietokantakäsittely

Projektiin on jo lisätty PostgreSQL ajuri, sekä DAO-moduuli
tietokannan käsittelyyn. Tehtävänä on siis vain päivittää kyseinen moduuli, sekä tehdä apuluokka joka helpottaa tarvittavan JSON dokumentin luomista.


- `pg_dao.js` sisältää yhteydenoton kantaan, mutta siitä puuttuu *scooters* taulun käsittelyfunktioiden toteutus, tasossa 1 niitä on kaksi. Myös yhteyden muodostamiseen vaadittavat käyttöjätunnus ja salasana täytyy ottaa käyttöön `.env` tiedosto toteuttamalla (tästä lisää seuraavassa kohdassa) 
    - Kun teet SQL-kyselyt, niin käyttöliittymä haluaa myös skuutin mallin nimen. Tee haku siis JOINilla
- Tietokannan yhteys muodostetaan käyttämällä `.env` tiedostosta luettavilla käyttäjätunnuksella ja salasanalla.
Nämä tiedot eivät ole soveliaita julkistaa GitHubissa, joten `.env` on `.gitignore`ssa ja täytyy siis lisätä projektiin (`sample.env` toimii hyvänä pohjana).
- `scooter.js` tiedostoon on tarkoitus toteuttaa luoka Scooter, jonka tehtävä on lähinnä helpottaa tietokannasta saadun datan muotoilemista vaadittavaan JSON-muotoon. Luokka siis vaatii käytännössä vain konstruktorin, joka lisää sopivat jäsenet saamistaan parametreista
    
    - parametrit: taulun sarakkeet, eli `id`, `model`, `lat`, `lon`, `max_electricity`, `current_electricity`, `added`
    - viimeisenä parametrina `modelname`, sen saat kun haet JOINilla myös skuutin mallin nimen

Vertailuna tietokannassa olevaan rakenteeseen: Front-endin odottama yhden skuutin JSON dokumentti voisi olla esimerkiksi:

  ```javascript 
  {
    "id":1,
    "model": {
        "id":2, 
        "name": "Glion" },
    "electricity": {
        "max":500, 
        "current":480 },
    "position": {
        "lat":60.12345, 
        "lon":23.0415 },
    "added":"2019-04-01"
}
```

Kannasta `pg_dao` moduulin hakemat skuutit täytyy muuntaa Scooter-tyyppisiksi olioiksi ennen palauttamista. Näin palvelusta palautuu halutun muotoista JSONia.

### REST-toteutus

Toteuta tarvittava middleware skuuttien käsittelyyn. Tämä toteutus `routes/scooters.js` moduuliin. Toteuta sinne seuraavat reitit:

- `GET /api/scooters` - palauttaa kaikki skuutit
- `GET /api/scooters/:id` - palauttaa skuutin, jonka id on polkuparametrissa

Tietokantaan **ei saa** ottaa suoraan yhteyttä tästä moduulista, vaan tietojen haku `pg_dao` moduulin avulla.

Huomaa, että jos sinulle tulee ongelmia JSON dokumentin kenttien kanssa - eli ne eivät ole Frontin haluamassa muodossa - niin todennäköisesti et ole käyttänyt Scooter-luokkaa, tai luokan toteutus ei ole kuten haluttu.

