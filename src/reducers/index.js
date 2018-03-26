import page from './page'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers({
    page,
    form: formReducer});
export default reducer