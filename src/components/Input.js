import React, {Component} from 'react'
import {fetchCity, changeInput} from '../actions'



export default class Input extends Component {


    render() {

        const {str} = this.props;

        return (<div>
            <form>
                <input type='text' placeholder='Введите город' onChange={this.props.onInputChange} />
                <button type='submit' onClick={this.props.onSubmitClicked} />
            </form>
        </div>)
    }

}