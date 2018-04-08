import React, {Component} from 'react'
import {fetchCity, changeInput} from '../actions'



export default class Input extends Component {


    render() {

        const {str} = this.props;

        return (<div>
            <form onSubmit={this.props.handleSubmit}>
                <input type='text' placeholder='Введите город' onChange={this.props.handleChange} />
                <button>Добавить</button>
            </form>
        </div>)
    }

}