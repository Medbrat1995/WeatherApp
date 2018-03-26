import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, renderDevTools} from '../utils/devTools';
import CityListContainer from './CityListContainer'
import FormContainer from './FormContainer'
import reducer from '../reducers/index';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <FormContainer />
                        <CityListContainer />
                    </div>
                </Provider>

                {renderDevTools(store)}
            </div>
        );
    }
}
