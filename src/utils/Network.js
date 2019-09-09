import {
    DO_RESET,
    EDIT_PROFILE,
    FAQ,
    FORGOT,
    HELP,
    LOGIN,
    MARKET_DETAILS,
    POST,
    POST_ORDER,
    POST_REQUEST_TYPE,
    REGISTER,
    RESET,
} from './api'


export const POSTORDER = (request) => fetch(POST_ORDER, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());


export const LOGIN_USER = (request) => fetch(LOGIN, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());


export const REGISTER_USER = (request) => fetch(REGISTER, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());

export const INVESTMENT = (request) => fetch(REGISTER, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());



export const UPDATE_USER = (request) => fetch(EDIT_PROFILE, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());
export const SEND_HELP = (request) => fetch(HELP, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());


export const UPDATE_RESET = (request) => fetch(DO_RESET, {
    ...POST_REQUEST_TYPE,
    body: JSON.stringify(request)
}).then((res) => res.json());


export const FORGOT_PASSWORD = (USER_ID) => fetch(`${FORGOT}/${USER_ID}`).then((res) => res.json());
export const RESET_PASSWORD = (USER_ID, ACTIVATION_CODE) => fetch(`${RESET}/${USER_ID}/${ACTIVATION_CODE}`).then((res) => res.json());
export const GET_FAQ = () => fetch(FAQ).then((res) => res.json());
export const NEW_POST = () => fetch(POST).then((res) => res.json());
export const GET_MARKET_DETAILS = (tab) => fetch(`${MARKET_DETAILS}${tab ? '/' + tab : ''}`)
    .then((res) => res.json());

