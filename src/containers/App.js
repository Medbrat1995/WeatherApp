import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {createStore, renderDevTools} from '../utils/devTools';
import CityListContainer from './CityListContainer'
import InputContainer from './InputContainer'
import reducer from '../reducers/index';
import {loadState, saveState} from '../localStorage';

export const persistedState = loadState();
const storeCreator = (persistedState) => {
    const store = createStore(
        reducer,
        persistedState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
};

const store = storeCreator(persistedState);
store.subscribe(() => {
    saveState({
        cities: store.getState().cities
    });
});

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
