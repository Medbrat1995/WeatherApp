import React, {Component} from 'react'


export default class CityList extends Component {

    render() {
        const {str, changeInput} = this.props;
        return (<div>
            <input type='text' placeholder='Введите город' />
            <input type='submit' value='Отправить' />
        </div>)
    }

}