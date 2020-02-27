# Assessment Front

Käyttöliittymä on toteutettu React-sovelluksena. Käytössä on myös react-router ja jonkin verran muitakin lisäkirjastoja.

## Vaadittavat muutokset

Samat on listattu myös sovelluksen etusivulla, ehkä jopa hieman tarkemmin.. Katso myös kommentteja lähdekoodissa.

- `components/ScooterList.jsx` - hae listaus palvelimelta. Nyt käytössä dummy dataa jonka käyttö pitäisi poistaa komponentista
- `App.js` - tänne toteutettu reititys. Lisää reititys detaljikomponenttiin
- `components/ScooterDetail.jsx` - tämä komponentti puuttuu kokonaan, toteuta
- `components/ScooterForm.jsx` - uuden skuutin lisääminen. Lomake on jo toteutettu, mutta se ei vielä lähetä uuden skuutin tietoja minnekään
- `services/apiservice.js` - APIn kanssa kommunikointi. Toteuta kaikki kommunikointi palvelimen kanssa tänne. Tarvittavien funktioiden raakileet löytyvät jo valmiina.

Muihin tiedostoihin ei ole syytä tehdä muutoksia, ainakaan Tason 1 toteutuksessa.
