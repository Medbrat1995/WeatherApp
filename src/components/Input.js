import React, {Component} from 'react'
import {fetchCity} from '../actions'


export default class Input extends Component {

    render() {
        let input
        return (<div>
            <form onSubmit = {e => {
                e.preventDefault();
                if(!input.value.trim()){
                    return
                }
                fetchCity(input.value)
            }}>
                <input type='text' placeholder='Введите город' />
                <button type='submit' />
            </form>
        </div>)
    }

}