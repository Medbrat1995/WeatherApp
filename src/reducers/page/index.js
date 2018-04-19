import {ADD_CITY, DELETE_CITY} from '../../actions/types';
import {loadState} from '../../localStorage';

export let persistedState = loadState();

export default function page(state = persistedState, action){
    console.log(state);
	switch(action.type){
		case ADD_CITY:
		return Object.assign({}, state, {
			cities: [
			...state.cities,
			{
				name: action.city.name,
				id: action.city.id,
				minTemp: action.city.main.temp_min,
				maxTemp: action.city.main.temp_max,
			}]
		});
		case DELETE_CITY:
			return Object.assign({}, state, {
				cities: state.cities.filter(city => city.id != action.id)
			});
		default: 
			return state;
	}
}