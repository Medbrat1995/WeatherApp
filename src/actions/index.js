import {ADD_CITY, CHANGE_INPUT, DELETE_CITY} from './types';

export const addCity = (city) => ({
    type: ADD_CITY,
    city
});

export const deleteCity = (id) => ({
    type: DELETE_CITY,
    id
});

export const changeInput = (str) => ({
    type: CHANGE_INPUT,
    str
});
