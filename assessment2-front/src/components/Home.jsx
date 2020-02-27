import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link';

export const Home = () => {
  return (
    <div className='Home'>
      <Jumbotron>
        <h1>There's no place like 127.0.0.1</h1>
        <p>Koti, sweet koti. Assessment testin pohja, eli muokkaapa koodia. Ohjeet
            alla tason 1 ratkaisuun.
        </p>
      </Jumbotron>
      <div>
        <h3>Muokattavat/tehtävät sivut</h3>
        <p>Alta voit halutessasi klikata tiedoston nimeä ja saat kyseisen tiedoston
          tarvitsemista muutoksista hieman lisätietoa. Muihin tiedostoihin ei 
          tarvitse tehdä muutoksia.
        </p>
        <Tab.Container id='list-group-tabs-mods' defaultActiveKey='#link1'>
          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1" as={Link} to='#link1'>
                <code>components/ScooterList.jsx</code>
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" as={Link} to='#link2'>
                <code>App.js</code>
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" as={Link} to='#link3'>
                <code>components/ScooterDetail.jsx</code>
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" as={Link} to='#link4'>
                <code>components/ScooterForm.jsx</code>
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" as={Link} to='#link5'>
                <code>services/apiservice.js</code>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={8}>
              <Tab.Content>
                <Tab.Pane eventKey='#link1'>
                  <p>Tänne muokataan datan hakeminen palvelimelta. Esimerkkinä 
                      oleva <var>dummydata</var> täytyy olla poistettuna lopullisessa versiossa.
                  </p>
                  <p>Käyttöliittymä on muuten jo oikeastaan valmis, 
                    ja <var>dummydatan</var> avulla nähdään miltä se tulee näyttämään kun tietoa
                    saadaan palvelimelta asti. Yksittäistä skuuttia klikkaamalla yritetään jo 
                    siirtyä tarkistelemaan kyseisen skuutin tietoja, mutta sen toimiminen vaatii 
                    reitiykseen muutoksen ja detaljikomponentin toteutuksen.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='#link2'>
                <p>Tänne muokataan reititystä siten, että detaljisivulle pääsee.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='#link3'>
                <p><b>UUSI KOMPONENTTI!</b> Tee uusi komponentti, ja toteuteta yhden skuutin tietojen 
                näyttäminen. Halutut tiedot:</p>
                <ul>
                    <li>Skuutin malli</li>
                    <li>Skuutin sijainti koordinaatteina</li>
                    <li>Skuutin maksimienergia</li>
                    <li>Skuutin nykyinen energia</li>
                    <li>Skuutin käyttöönottopäivä</li>
                </ul>
                </Tab.Pane>
                <Tab.Pane eventKey='#link4'>
                <p>Lomake on muuten toteutettu, mutta siitä puuttuu tietojen lähettäminen palvelimelle.</p>
                <p>Toteuta siis luokan alusta löytyvä <code>submitForm</code>-funktio toimivaksi.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='#link5'>
                <p>Tähän moduuliin on toteutettava palvelimelle tehtävät API-kutsut.</p>
                <p>Saat käyttää <code>fetch</code>, <code>XMLHttpRequest</code>, tai jotain muuta
                toteutusta. Kunhan kutsut toimivat. Taso 1:n vaatimat koodit:</p>
                <ul>
                <li><code>getAllScooters</code> hakee kaikki skuutit</li>
                <li><code>getSingleScooter</code> hakee yhden skuutin sen id:n perusteella</li>
                <li><code>postSingleScooter</code> lähettää yhden skuutin luotavaksi palvelimelle</li>
                </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  )
}
