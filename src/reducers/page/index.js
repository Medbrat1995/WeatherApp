import {addCity, deleteCity} from '../actions/index'

const initialState = {
	page:
		{
			cities: [
				{name: 'Moscow', id: 1, minTemp: 15, maxTemp: 20}, 
				{name: 'London', id: 2, minTemp: 12, maxTemp: 17}, 
				{name: 'Stariy Oskol', id: 777, minTemp: 35, maxTemp: 10}, 
				]
		}
};

export default function page(state = initialState, action){
	switch(action.type){
		case 'ADD_CITY':
		return Object.assign({}, state, {
			cities: [
			...state.page.cities,
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