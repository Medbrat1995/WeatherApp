import React, {Component} from 'react'
import {fetchCity, changeInput} from '../actions'


export default class Input extends Component {


    render() {

        const {str} = this.props;

        const onInputChange = (e) => {
            e.preventDefault();
            dispatch(changeInput(e.target.value));
        };

        const onSubmit = (e) => {
            e.preventDefault();
            const city = state.input.str;
            dispatch(fetchCity(city));
        };

        return (<div>
            <form>
                <input type='text' placeholder='Введите город' onChange={this.props.onInputChange} />
                <button type='submit' onClick={this.props.onSubmit} />
            </form>
        </div>)
    }

}