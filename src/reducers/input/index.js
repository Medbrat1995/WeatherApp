import {changeInput} from '../actions/index'
const initialState = {
	input: {
		queryString: ""
	}
};

export default function input(state = initialState, action){
	switch(action.type){
		case 'CHANGE_INPUT':
		return Object.assign({}, state, {
			input:{
				queryString: action.str
			}
		});
		default: 
			return state;
	}
}