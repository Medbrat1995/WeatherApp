import React, {Component} from 'react'

export default class CityListItem extends Component {
    render() {
        const {city} = this.props;

        return (<ul>
            <li>id: {city.id}</li>
            <li>name: {city.name}</li>
            <li>min: {city.minTemp}</li>
            <li>max: {city.maxTemp}</li>
        </ul>)
    }
}