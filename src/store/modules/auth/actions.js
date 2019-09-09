import {EMAIL, ID, IS_LOADING, NAME, PASSWORD, PHONE_NUMBER, TOKEN} from './types';
import {LOGIN_USER, REGISTER_USER, RESET_PASSWORD} from "../../../utils/Network";
import {setFirstTimer, setLoggedIn, setStatus, setStatusMessage,} from "../app";
import {DO_RESET} from "../../../utils/api";
import {APP_DB} from "../../../utils/helper";
import {NavigationActions} from "react-navigation";
import {AsyncStorage} from "react-native";

export const setName = name => dispatch => {
    dispatch({
        type: NAME,
        payload: name
    });
};

export const setToken = token => dispatch => {
    dispatch({
        type: TOKEN,
        payload: token
    });
};

export const setID = id => dispatch => {
    dispatch({
        type: ID,
        payload: id
    });
};

export const setPhoneNumber = phoneNumber => dispatch => {
    dispatch({
        type: PHONE_NUMBER,
        payload: phoneNumber
    });
};

export const setEmail = email => dispatch => {
    dispatch({
        type: EMAIL,
        payload: email
    });
};

export const setPassword = password => dispatch => {
    dispatch({
        type: PASSWORD,
        payload: password
    });
};


export const setLoading = isLoading => dispatch => {
    dispatch({
        type: IS_LOADING,
        payload: isLoading
    });
};


export const setUserDetails = (details, navigation) => (dispatch, getState) => {

    AsyncStorage.setItem(APP_DB, JSON.stringify({
        id: details.id,
        name: details.name,
        email: details.email,
        isLoggedIn: true,
        firstTimeUser: false,
        token: details.token,
    }));
    console.log('Set to navigate');
    dispatch(setLoggedIn(true));
    dispatch(setID(details.id));
    dispatch(setName(details.name));
    dispatch(setEmail(details.email));
    dispatch(setToken(details.token));
    dispatch(setFirstTimer(false));
    const navigateAction = NavigationActions.navigate({
        routeName: 'Dashboard',
    });
    navigation.dispatch(navigateAction);

};


export const registerUser = navigation => (dispatch, getState) => {
    dispatch(setLoading(true));
    REGISTER_USER(getState().Auth).then(
        ({status, message, data}) => {
            dispatch(setStatusMessage(message));
            dispatch(setLoading(false));
            if (status === 'success') {
                dispatch(setStatus(status));
                dispatch(setUserDetails(data, navigation));
            }else {
                dispatch(setStatus('error'));
            }
        }
    ).catch((e) => {
        dispatch(setStatusMessage(e.message));
        dispatch(setStatus('error'));
        dispatch(setLoading(false));
    });
};


export const loginUser = navigation => (dispatch, getState) => {
    dispatch(setLoading(true));
    LOGIN_USER(getState().Auth).then(
        (res) => {
            const {status, message, data} = res;
            dispatch(setStatusMessage(message));
            dispatch(setLoading(false));
            if (status === 'success') {
                dispatch(setStatus(status));
                dispatch(setUserDetails(data, navigation));
            }else {
                dispatch(setStatus('error'));
            }
        }
    ).catch((e) => {
        dispatch(setStatusMessage(e.message));
        dispatch(setStatus('error'));
        dispatch(setLoading(false));
    });
};


export const resetPassword = navigation => (dispatch, getState) => {
    dispatch(setLoading(true));
    RESET_PASSWORD(getState().Auth).then(
        ({status, message, data}) => {
            dispatch(setStatusMessage(message));
            dispatch(setLoading(false));

            if (status === 'success') {
                dispatch(setStatus(status));
                dispatch(setUserDetails(data, navigation));
            }else {
                dispatch(setStatus('error'));
            }
        }
    ).catch((e) => {
        dispatch(setStatus('error'));
        dispatch(setStatusMessage(e.message));
        dispatch(setLoading(false));
    });
};

export const doReset = navigation => (dispatch, getState) => {
    dispatch(setLoading(true));
    DO_RESET(getState().Auth).then(
        ({status, message, data}) => {
            dispatch(setStatus(status));
            dispatch(setLoading(false));
            dispatch(setStatusMessage(message));
            if (status === 'success') {
                const {name, phone} = data;
                dispatch(setName(name));
                dispatch(setPhoneNumber(phone || ''));
                navigation.navigate('Dashboard');
            }
        }
    ).catch((e) => {
        dispatch(setStatus('error'));
        dispatch(setStatusMessage(e.message));
        dispatch(setLoading(false));
    });
};



