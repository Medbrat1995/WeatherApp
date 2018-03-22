import React, {Component} from 'react'

export default class CityListItem extends Component{
	render(){
		
		return(<ul>
			<li>id: {this.props.city.id}</li>
			<li>name: {this.props.city.name}</li>
			<li>min: {this.props.city.minTemp}</li>
			<li>max: {this.props.city.maxTemp}</li>
			</ul>)
	}
}