import {addCity, deleteCity, requestSuccess, requestFail} from '../../actions/index'

const initialState = {
			cities: [
				{name: 'Moscow', id: 1, minTemp: 15, maxTemp: 20, lastUpdated: 255836},
				{name: 'London', id: 2, minTemp: 12, maxTemp: 17, lastUpdated: 255836},
				{name: 'Stariy Oskol', id: 777, minTemp: 35, maxTemp: 10, lastUpdated: 255836},
				]
};

export default function page(state = initialState, action){
	switch(action.type){
		case 'ADD_CITY':
		return Object.assign({}, state, {
			cities: [
			...state.cities,
			{
				name: action.city.name,
				id: action.city.id,
				minTemp: action.city.minTemp,
				maxTemp: action.city.maxTemp,
			}]
		})
		default: 
			return state;
	}
}