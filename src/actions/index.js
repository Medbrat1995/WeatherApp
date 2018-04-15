import {ADD_CITY, DELETE_CITY, RECEIVE_FAIL, REQUEST_IN_PROCESS, RECEIVE_SUCCESS, CHANGE_INPUT} from './types';

export const addCity = (city) => ({
    type: ADD_CITY,
    city
});

export const deleteCity = (id) => ({
    type: DELETE_CITY,
    id
});

export const requestInProcess = () => ({
    type: REQUEST_IN_PROCESS
});

export const receiveSuccess = () => ({
    type: RECEIVE_SUCCESS
});

export const receiveFail = (error) => ({
    type: RECEIVE_FAIL,
    error
});

export const changeInput = (str) => ({
    type: CHANGE_INPUT,
    str
});

export const fetchCity = (city) => {
    return (dispatch, getState) => {
        dispatch(requestInProcess());
        return fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=b8b4cec7e0ef27313f5c3aa7808c6c73')
            .then(response => response.json())
            .then(json => console.log('[obabichev] json', json) || dispatch(addCity(json)))
            .then(() => dispatch(receiveSuccess()))
            .catch(error => dispatch(receiveFail(error)))
    }
};