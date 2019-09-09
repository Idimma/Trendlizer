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


const initialState = {
    isLoading: false,
    fixed: [],
    bonds: [],
    equity: [],
    money_market: [],
    investments: [],
    invest: {},
    selected_fund: {},
    mutual_funds: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INVEST:
            return {
                ...state,
                invest: action.payload
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case MONEY_MARKET:
            return {
                ...state,
                money_market: action.payload
            };
        case FIXED_INCOME:
            return {
                ...state,
                fixed: action.payload
            };

        case MUTUAL_FUNDS:
            return {
                ...state,
                mutual_funds: action.payload
            };
        case BONDS:
            return {
                ...state,
                bonds: action.payload
            };
        case EQUITIES:
            return {
                ...state,
                equity: action.payload
            };
        case SELECTED_FUND:
            return {
                ...state,
                selected_fund: action.payload
            };
        case INVESTMENTS:
            return {
                ...state,
                investments: action.payload
            };


        default:
            return state;
    }
}
