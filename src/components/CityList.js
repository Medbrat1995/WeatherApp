import React, {Component} from 'react'
import CityListItem from './CityListItem'

export default class CityList extends Component {

    render() {
        const {cities, onDeleteCity, onCheckForUpdateCity} = this.props;
        return (<div>
            {cities.map(city => <CityListItem city={city} onDeleteCity={onDeleteCity} onCheckForUpdateCity={onCheckForUpdateCity}/>)}
        </div>)
    }

}