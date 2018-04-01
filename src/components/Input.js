import React, {Component} from 'react'
import {fetchCity, changeInput} from '../actions'


export default class Input extends Component {


    render() {

        const {str} = this.props;

        const inputChange = (e) => {
            e.preventDefault();
            dispatch(changeInput(e.target.value));
        };

        const submit = (e) => {
            e.preventDefault();
            const city = state.input.str;
            dispatch(fetchCity(city));
        };

        return (<div>
            <form>
                <input type='text' placeholder='Введите город' onChange={inputChange} />
                <button type='submit' onClick={submit} />
            </form>
        </div>)
    }

}