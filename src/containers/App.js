import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {createStore, renderDevTools} from '../utils/devTools';
import CityListContainer from './CityListContainer'
import InputContainer from './InputContainer'
import reducer from '../reducers/index';

const store = createStore(reducer, thunkMiddleware && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <InputContainer />
                        <CityListContainer />
                    </div>
                </Provider>

                {renderDevTools(store)}
            </div>
        );
    }
}
