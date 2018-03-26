import {CHANGE_INPUT} from '../../actions/types'

const initialState = {
    inputString: ''
};

export default function input(state = initialState, action){
    switch(action.type){
        case CHANGE_INPUT:
            return Object.assign({}, state, {
                inputString: action.str
            })
        default:
            return state;
    }
}