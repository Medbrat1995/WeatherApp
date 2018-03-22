import React, {Component} from 'react'
import CityListItem from './CityListItem'

export default class CityList extends Component {

    render() {
        const {cities} = this.props;
        return (<div>
            {cities.map(city => <CityListItem city={city}/>)}
        </div>)
    }

}