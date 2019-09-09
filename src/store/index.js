
import {
	compose,
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import { createLogger } from 'redux-logger';
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Alert } from 'react-native';
import AppNavigator from '../screens';
import { Auth } from './modules/auth';
import { App } from './modules/app';
import { Investments } from './modules/investment';




const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
	nav: navReducer,
	App,
	Auth,
	Investments
});

// Netinfo Middleware
const netLock = soe => next => action => {
	const { isConnected } = soe.getState().App;
	next(action);
	if (isConnected !== null && isConnected === false) {
		Alert.alert('No Internet Connection!','Please check your connection');
		return null;
	}
};


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav,
);

const ReduxifiedNavigator = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = (state) => ({ state: state.nav, });

export const AppWithNavigationState = connect(mapStateToProps)(ReduxifiedNavigator);

export const AppNavigation = AppWithNavigationState;


const enhancer = compose(
	applyMiddleware( middleware,
		promise, ReduxThunk,
		netLock, loggerMiddleware,
	),
);

export const store = createStore(appReducer, {}, enhancer);

