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
    * Lisää uusi
- Toteuta yhteysoptioiden käyttäjätunnuksen ja salasanan haku `.env` tiedostosta
- Toteuta REST-rajapinta samoille toiminnoille kuin tietokantakäsittelyyn, eli 
    * Hae kaikki
    * Hae yksi id:llä
    * Lisää uusi
- Toteuta apuluokka `Scooters` jonka avulla tietokannasta haettu tieto muutetaan sopivan muotoiseksi JSONiksi

### Front-end

Front-endina React-sovellus. Se näyttää jo tomivan jollakin tavalla, mutta osa toiminnallisuudesta on vakiodataa joka pitäisi oikeasti hakea palvelimelta.

- Hae skuuttilista palvelimelta ja näytä se listalla (poista pohjassa käytetty vakiodata)
- toteuta yhden skuutin detaljien näyttäminen
- toteuta uuden skuutin tietojen lähettäminen palvelimelle
