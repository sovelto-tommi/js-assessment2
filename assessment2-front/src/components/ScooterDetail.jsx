import React, { Component } from 'react'
import { getSingleScooter } from '../services/apiservice'

export default class ScooterDetail extends Component {
    state = { scooter: null }
    componentDidMount() {
        const id = this.props.match.params.id;
        getSingleScooter(id).then(scooter => {console.log("Found", scooter); this.setState({scooter})});
    }
    render() {
        if (!this.state.scooter) return <p>Loading..</p>
        console.log(this.state.scooter);
        const {model, position, electricity, added} = this.state.scooter
        return (
            <div>
              <h2>Model: {model.name} ({model.id})</h2>  
              <p>Electricity: {electricity.current} / {electricity.max}</p>  
              <p>Position: {position.lat}, {position.lon}</p>  
              <p>Aquired: {added}</p>  
            </div>
        )
    }
}
