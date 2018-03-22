import page from './page'
import input from './input'
import {combineReducers} from 'redux'

const reducer = combineReducers(page, input)
export default reducer