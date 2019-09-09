import {
    ERROR,
    FIRST_TIMER,
    IS_CONNECTED,
    IS_LOADING,
    IS_LOGGEDIN,
    NEW_REQUEST,
    REQUESTS,
    STATUS,
    STATUS_MESSAGE
} from './types';


const initialState = {
    newRequest: [],
    requests: [],
    error: {},
    isConnected: null,
    status: '',
    status_message: '',
    isLoggedIn: false,
    firstTimeUser: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_CONNECTED:
            return {
                ...state,
                isConnected: action.payload
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case NEW_REQUEST:
            return {
                ...state,
                newRequest: action.payload
            };
        case REQUESTS:
            return {
                ...state,
                requests: action.payload
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        case STATUS_MESSAGE:
            return {
                ...state,
                status_message: action.payload
            };
        case STATUS:
            return {
                ...state,
                status: action.payload
            };
        case IS_LOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case FIRST_TIMER:
            return {
                ...state,
                firstTimeUser: action.payload
            };
        default:
            return state;
    }
}
