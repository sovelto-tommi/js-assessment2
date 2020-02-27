# Assessment Front

Käyttöliittymä on toteutettu React-sovelluksena. Käytössä on myös react-router ja jonkin verran muitakin lisäkirjastoja. Tehtävänä käyttää back-endin uusia palveluja, eli viimeistellä skuutit listaava sivu, sekä toteuttaa uusi `ScooterDetails` komponentti.

## Vaadittavat muutokset

Samat on listattu myös sovelluksen etusivulla, ehkä jopa hieman tarkemmin.. Katso myös kommentteja lähdekoodissa.

- `components/ScooterList.jsx` - hae listaus palvelimelta. Nyt käytössä dummy dataa jonka käyttö pitäisi poistaa komponentista
- `App.js` - tänne toteutettu reititys. Lisää reititys detaljikomponenttiin
- `components/ScooterDetail.jsx` - tämä komponentti puuttuu kokonaan, toteuta. Toteutuksen ei tarvitse olla erityisen hieno, kunhan vaadittavat asiat löytyvät täältä, eli
    - Skuutin malli
    - Skuutin sijainti koordinaatteina
    - Skuutin maksimienergia
    - Skuutin nykyinen energia
    - Skuutin käyttöönottopäivä
- `services/apiservice.js` - APIn kanssa kommunikointi. Toteuta kaikki kommunikointi palvelimen kanssa tänne. Tarvittavien funktioiden raakileet löytyvät jo valmiina.

Muihin tiedostoihin ei ole syytä tehdä muutoksia, ainakaan Tason 1 toteutuksessa.
