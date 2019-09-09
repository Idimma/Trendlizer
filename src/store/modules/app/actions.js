import {ERROR, FIRST_TIMER, IS_CONNECTED, IS_LOGGEDIN, NEW_REQUEST, REQUESTS, STATUS, STATUS_MESSAGE,} from './types';

export const setConnected = isConnected => dispatch => {
    dispatch({
        type: IS_CONNECTED,
        payload: isConnected
    });
};


export const setNewRequest = newOrders => dispatch => {
    dispatch({
        type: NEW_REQUEST,
        payload: newOrders
    });
};

export const setRequests = orders => dispatch => {
    dispatch({
        type: REQUESTS,
        payload: orders
    });
};

export const setError = error => dispatch => {
    dispatch({
        type: ERROR,
        payload: error
    });
};

export const setStatus = status => dispatch => {
    dispatch({
        type: STATUS,
        payload: status
    });
};

export const setStatusMessage = (message) => dispatch => {
    dispatch({
        type: STATUS_MESSAGE,
        payload: message
    });
};

export const setFirstTimer = (status) => dispatch => {
    dispatch({
        type: FIRST_TIMER,
        payload: status
    });
};

export const setLoggedIn = (status) => dispatch => {
    dispatch({
        type: IS_LOGGEDIN,
        payload: status
    });
};


