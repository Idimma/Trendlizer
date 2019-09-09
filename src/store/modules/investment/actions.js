import {
    BONDS,
    EQUITIES,
    FIXED_INCOME,
    INVEST,
    INVESTMENTS,
    IS_LOADING,
    MONEY_MARKET,
    MUTUAL_FUNDS,
    SELECTED_FUND,
} from './types';

import {GET_MARKET_DETAILS} from "../../../utils/Network";

import {setStatus, setStatusMessage} from "../app";


export const setBonds = bonds => dispatch => {
    dispatch({
        type: BONDS,
        payload: bonds
    });
};

export const setMutualFund = funds => dispatch => {
    dispatch({
        type: MUTUAL_FUNDS,
        payload: funds
    });
};


export const setSelectedFund = (type, index) => dispatch => {
    dispatch({
        type: SELECTED_FUND,
        payload: {type, index}
    });
};

export const setLoading = isLoading => dispatch => {
    dispatch({
        type: IS_LOADING,
        payload: isLoading
    });
};


export const setFixedIncomes = incomes => dispatch => {
    dispatch({
        type: FIXED_INCOME,
        payload: incomes
    });
};

export const setInvest = invest => dispatch => {
    dispatch({
        type: INVEST,
        payload: invest
    });
};

export const setInvestments = investments => dispatch => {
    dispatch({
        type: INVESTMENTS,
        payload: investments
    });
};

export const setEquities = equities => dispatch => {
    dispatch({
        type: EQUITIES,
        payload: equities
    });
};

export const setMoneyMarket = market => dispatch => {
    dispatch({
        type: MONEY_MARKET,
        payload: market
    });
};
export const setAllMarketData = data => (dispatch, getState) => {

    const {mutual, money, bond, income, equities,} = data;

    const {fixed, bonds, equity, money_market, mutual_funds,} = getState();

    dispatch(setMutualFund(mutual || mutual_funds || []));
    dispatch(setMoneyMarket(money || money_market || []));
    dispatch(setEquities(equities || equity || []));
    dispatch(setBonds(bond || bonds || []));
    dispatch(setFixedIncomes(income || fixed || []));
};


export const loadMarketData = (tab = null) => (dispatch, getState) => {
    dispatch(setLoading(true));
    const market = ['equity', 'money', 'bonds', 'income'];
    GET_MARKET_DETAILS(tab && market[tab]).then(
        ({status, message, data}) => {
            dispatch(setLoading(false));
            if (status === 'success') {
                dispatch(setAllMarketData(data));
            }
        }
    ).catch((e) => {
        dispatch(setStatusMessage(e.message));
        dispatch(setStatus('error'));
        dispatch(setLoading(false));
    });
};

