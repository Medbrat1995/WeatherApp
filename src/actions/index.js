import {ADD_CITY, DELETE_CITY, REQUEST_FAIL, REQUEST_IN_PROCESS, REQUEST_SUCCESS} from './types';

export const addCity = (city) => ({
    type: ADD_CITY,
    city
});

export const deleteCity = (id) => ({
    type: DELETE_CITY,
    id
});

export const changeInput = (name) => ({
    type: CHANGE_INPUT,
    name
});

export const requestInProcess = (url) => ({
    type: REQUEST_IN_PROCESS,
    url
});

export const requestSuccess = (data) => ({
    type: REQUEST_SUCCESS,
    data
});

export const requestFail = (error) => ({
    type: REQUEST_FAIL,
    error
});