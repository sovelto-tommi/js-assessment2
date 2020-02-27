# Assessment test 2

Tehtävänä on jatkaa skuutteja vuokraavan yrityksen tilaman Full stack-ohjelmiston toteutusta. Tämän sprintin backlogiin kuuluu skuuttien :kick_scooter: hallinnan toteutus: tietokantaan, backendiin ja fronttiin.

Koska kyseessä ei ole ensimmäinen sprintti projektissa, ja tiimiin kuuluu muitakin Developereita niin pääset jo osaksi toteutettujen projektien pariin. Onneksi joitakin README.md tiedostoja on lisätty kertomaan mitä pitäisi tehdä, lisäksi lähdekoodeissa on useita TODO-kommentteja jotka kertovat lisää. Ketterästi kun tehdään, niin esimerkiksi osa testeistä tähänkin featureen on jo toteutettu, ja ne antavat luonnollisesti lisävinkkiä siitä mitä pitäisi saada tehtyä.

Jotta molemmat projektit saisi mahdollisimman helposti työn alle, on tämä repositorio järjestetty hieman hyvien tapojen vastaisesti, eli Backend ja Frontend ovat tässä yhdessä ja ainoassa repositoriossa pelkästään alihakemistoina. Avaa ne kuitenkin omina projekteinaan.

## Lyhyt lista vaatimuksista

Tässä tiivistetty lista vaatimuksista. Tarkempia ohjeita löytyy esimerkiksi alihakemistojen README.md tiedostoista, koodiin kirjoitetuista TODO-kommenteista, sekä esimerkiksi testeistä.

### Back-end: Tietokanta

Nämä SQL-kieltä käyttäen
- Luo taulu *scooters*
- Lisää tauluun muutama skuutti

### Back-end: Koodi
Nämä JavaScriptillä
- Toteuta tietokantakäsittely *scooters* tauluun
    * Hae kaikki
    * Hae yksi id:llä
- Toteuta yhteysoptioiden käyttäjätunnuksen ja salasanan haku `.env` tiedostosta
- Toteuta REST-rajapinta samoille toiminnoille kuin tietokantakäsittelyyn, eli 
    * Hae kaikki
    * Hae yksi id:llä
- Toteuta apuluokka `Scooters` jonka avulla tietokannasta haettu tieto muutetaan sopivan muotoiseksi JSONiksi

### Front-end

Front-endina React-sovellus. Se näyttää jo tomivan jollakin tavalla, mutta osa toiminnallisuudesta on vakiodataa joka pitäisi oikeasti hakea palvelimelta.

- Hae skuuttilista palvelimelta ja näytä se listalla (poista pohjassa käytetty vakiodata)
- toteuta yhden skuutin detaljien näyttäminen

## Taso 2

Tason 2 läpäistäksesi täytyy toteuttaa taso 1, ja sen jälkeen
kolme lisätoiminnallisuutta.

### 1. Skuuttien CRUD

Frontin detaljinäkymään (tasossa 1 tehty uusi komponentti) seuraava toiminnallisuus:

- Skuutin voi lisätä (tähän valmis käyttöliittymä, komponentissa `ScooterForm`)
- Skuutin voi poistaa
- Skuutin tietoja voi muuttaa

Tämä vaatii luonnollisesti myös toteutusta backiin.

### 2. Skuuttilistan filtteröinti

Listanäkymään tehtävä mahdollisuus filtteröidä näytettäviä skuutteja, eli näytetään vain käyttäjän valitsemien kriteerien täyttävät skuutit. Toteutettavat kriteerit:
- Akun tila vähintään prosenttia
- Skuutin malli, vain tietyn malliset skuutit. Ei tarvitse toteuttaa useamman halutun mallin perusteella filtteröintiä.

Oletuksena sivu siis näyttää kaikki skuutit, mutta käyttäjälle annettava mahdollisuus rajoittaa näytettäviä skuutteja halutessaan. Tämän voi tehdä esimerkiksi listan yläpuolelle lisättävien lomakekenttien avulla. Riittää että yksi filtteri kerrallaan voi olla käytössä.

### 3. Skuuttimalleille CRUD

Lisäksi on toteutettava CRUD toiminnallisuus skuuttimalleille, eli
- Kaikkien mallien listaaminen
- Uuden mallin lisääminen
- Mallin tietojen muuttaminen
- Mallin poistaminen, tämä saa onnistua vain **jos** mallista
ei ole yhtään skuuttia käytössä. Jos poistaminen epäonnistuu, niin käyttöliittymän on kerrottava syy käyttäjälle

