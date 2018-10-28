import React, {Component} from 'react'

export default class CityListItem extends Component {

    componentDidMount(){
        this.props.onCheckForUpdateCity(this.props.city);
    }
    render() {
        const {city, onDeleteCity, onCheckForUpdateCity} = this.props;

        return (<div>
            <p>name: {city.name}</p>
            <p>min: {city.minTemp}</p>
            <p>max: {city.maxTemp}</p>
            <button onClick={(e) => {
                e.preventDefault();
                onDeleteCity(city.id);
            }}>Удалить</button>
        </div>)
    }
}