import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {createStore, renderDevTools} from '../utils/devTools';
import CityListContainer from './CityListContainer'
import InputContainer from './InputContainer'
import reducer from '../reducers/index';

// const store = createStore(reducer, thunkMiddleware && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const storeCreator = (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
};

const store = storeCreator();

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
