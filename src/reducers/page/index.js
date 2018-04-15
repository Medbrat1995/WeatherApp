import {ADD_CITY, DELETE_CITY} from '../../actions/types';

const initialState = {
			cities: [
				{name: 'Moscow', id: 1, minTemp: 15, maxTemp: 20, lastUpdated: 255836},
				{name: 'London', id: 2, minTemp: 12, maxTemp: 17, lastUpdated: 255836},
				{name: 'Stariy Oskol', id: 777, minTemp: 35, maxTemp: 10, lastUpdated: 255836},
				]
};

export default function page(state = initialState, action){
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