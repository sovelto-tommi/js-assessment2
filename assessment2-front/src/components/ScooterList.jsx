import React, { Component } from 'react'
import { Scooter } from './Scooter'
import { Table } from 'react-bootstrap'
import { getAllScooters } from '../services/apiservice'

export default class ScooterList extends Component {
  state = {scoots: []}
  componentDidMount() {
    getAllScooters().then(scoots => this.setState({scoots}))
  }
  render () {
    const scoots = this.state.scoots.map(s => <Scooter key={s.id} scooter={s} {...this.props}/>)
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
