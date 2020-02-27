import React from 'react'

export const Scooter = (props) => {
    const moveToDetail = () => {
        const id = props.scooter.id;
        props.history.push(`/detail/${id}`)
    }
    const {scooter} = props;
    return (
        <tr onClick={moveToDetail}>
            <td>{scooter.model.name}</td> 
            <td>{Math.round(scooter.electricity.current / scooter.electricity.max * 100)}%</td>
            <td>({scooter.position.lat}, {scooter.position.lon})</td>
        </tr>
    )
}
