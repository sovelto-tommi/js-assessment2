import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import { getAllModels } from '../services/apiservice'

export default class ScooterForm extends Component {
  // TODO: toteuta tämä, muita muutoksia ei tarvita.
  // lähetettävät tiedot this.state.scooter -muuttujassa
  submitForm = evt => {
    evt.preventDefault()
    console.error("ASSESSMENT TEST:", "Submit the form data!");
    console.group('Submitting');
    console.log(this.state.scooter);
    console.groupEnd();
  }

  state = {
    // Some initial data
    scooter: {
      model: '2',
      position: { lat: 60.24561, lon: 23.2875 },
      electricity: { max: 500, current: 0 },
      added: '2020-01-14'
    },
    models: [],
    error: null
  }
  componentDidMount() {
    getAllModels().then(models => {
      this.setState({models});
    }).catch(err=> {
      console.error("Virhe kiinni", err);
      this.setState({error: err.message})
    });
  }

  handleFormChange = evt => {
    const value = evt.target.value
    const name = evt.target.name
    const { scooter } = this.state
    if (/\./.test(name)) {
      const first = name.substring(0, name.indexOf('.'))
      const second = name.substring(name.indexOf('.') + 1)
      scooter[first][second] = value
    } else {
      scooter[name] = value
    }
    this.setState({ scooter })
  }
  integerValidation = evt => {
    if (!evt.target.validity.valid) return
    else this.handleFormChange(evt)
  }
  render () {
    const { model, position, electricity, added } = this.state.scooter
    if (this.state.error) {
      return (<div className="fetcherror"><h1>Error</h1>
      <p>There was an error: {this.state.error}</p>
      </div>  )
    }
    const models = this.state.models.map(m => {
      return <option key={m.id} value={m.id}>{m.name}</option>
    })
    return (
      <div className='ScooterForm'>
          <h1>Add new Scooter</h1>
          {    this.state.models.length > 0 ?
            <>
        <Form.Group as={Row} controlId='scooterform.ControlSelect1'>
          <Form.Label column sm="2">Model</Form.Label>
          <Col sm="10">
              <Form.Control
                value={model}
                name='model'
                as='select'
                onChange={this.handleFormChange}
              >
                {models}
                {/* <option value='1'>Ninebot</option>
                <option value='2'>Glion</option>
                <option value='3'>Xiaomi</option> */}
              </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='scooterform.LatitudeInput'>
          <Form.Label column sm="2">Latitude</Form.Label>
          <Col sm="10">
              <Form.Control
                value={position.lat}
                name='position.lat'
                type='number'
                onChange={this.handleFormChange}
              />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='scooterform.LongitudeInput'>
          <Form.Label column sm="2">Longitude</Form.Label>
          <Col sm="10">
              <Form.Control
                value={position.lon}
                name='position.lon'
                type='number'
                onChange={this.handleFormChange}
              />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='scooterform.MaxElInput'>
          <Form.Label column sm="2">Max electricity</Form.Label>
          <Col sm="10">
              <Form.Control
                value={electricity.max}
                name='electricity.max'
                onChange={this.integerValidation}
                type='text'
                pattern='[0-9]*'
              />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='scooterform.added'>
          <Form.Label column sm="2">Date added</Form.Label>
          <Col sm="10">
              <Form.Control 
                value={added}
                name='added'
                onChange={this.handleFormChange}
                type='date'
              />
          </Col>
        </Form.Group>
        <p>
          <Button onClick={this.submitForm} variant='light'>
            Submit
          </Button>
        </p></>
        :
        <p>Initializing...</p>
        }
      </div>
    )
  }
}
