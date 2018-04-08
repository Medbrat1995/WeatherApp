import {requestInProcess} from '../../actions';
import {CHANGE_INPUT} from '../../actions/types';

const initialState = {
    str: ''
};

export default function input(state = initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return Object.assign({}, state, {
                str: action.str
            })
        default:
            return state
    }

}