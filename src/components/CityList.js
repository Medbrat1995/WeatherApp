import React, {Component} from 'react'
import CityListItem from './CityListItem'

export default class CityList extends Component{
	
	render(){
		
		return(<div>{this.props.cities.map(city => <CityListItem city={city} />)}</div>)
	}

}