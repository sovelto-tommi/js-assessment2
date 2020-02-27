import React, { Component } from 'react'
import { Scooter } from './Scooter'
import { Table } from 'react-bootstrap'

export default class ScooterList extends Component {
  render () {
    /* TODO: Poista dummydata alta, ja korvaa se hakemalla
    varsinaiset tiedot palvelimelta. Muista tehdä 
    haku services/apiservices.js moduulissa ja sen
    getAllScooters() funktiossa. Tähän komponenttiin vain 
    kyseisen funktion kutsu */
    // <clip>
    const dummydata = [
      {
        id: 1,
        model: { id: 2, name: 'Glion' },
        electricity: { max: 500, current: 480 },
        position: { lat: 60.12345, lon: 23.0415 },
        added: '2019-04-01'
      },
      {
        id: 2,
        model: { id: 1, name: 'Ninebot' },
        electricity: { max: 1200, current: 230 },
        position: { lat: 60.5421, lon: 23.1 },
        added: '2019-04-01'
      },
      {
        id: 3,
        model: { id: 3, name: 'Xiaomi' },
        electricity: { max: 740, current: 500 },
        position: { lat: 60.12345, lon: 23.0416 },
        added: '2019-04-01'
      },
      {
        id: 4,
        model: { id: 2, name: 'Glion' },
        electricity: { max: 500, current: 500 },
        position: { lat: 60.3, lon: 24.314 },
        added: '2019-07-14'
      }
    ]
    const scoots = dummydata.map(s => <Scooter key={s.id} scooter={s} {...this.props}/>)
    // </clip>
    return (
      <div>
        <h1>Available scooters</h1>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Model</th>
              <th>Power</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>{scoots}</tbody>
        </Table>
      </div>
    )
  }
}
