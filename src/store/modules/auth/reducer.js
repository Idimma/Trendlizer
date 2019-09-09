import {EMAIL, IS_LOADING, NAME, PASSWORD, PHONE_NUMBER, TOKEN, ID} from './types';

const initialState = {
    isLoading: false,
    name: '',
    id: '',
    token: '',
    email: '',
    password: '',
    phoneNumber: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case ID:
            return {
                ...state,
                id: action.payload
            };
        case NAME:
            return {
                ...state,
                name: action.payload
            };
        case TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload
            };
        default:
            return state;
    }
}
