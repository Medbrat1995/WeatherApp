import React, {Component} from 'react'


export default class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.value);
    };

    render() {
        const {str} = this.state;

        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input value={str} type='text' placeholder='Введите город' onChange={this.handleChange}/>
                <button>Добавить</button>
            </form>
        </div>)
    }
}
