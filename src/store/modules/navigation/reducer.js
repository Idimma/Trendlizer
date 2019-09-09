import {NavigationActions} from 'react-navigation';
import {LOGIN} from './types';

import {RootNavigator} from '../../';

// Start with two routes: The Main screen, with the Login screen on top.
const initAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialState = RootNavigator.router.getStateForAction(
    initAction,
);

export default function reducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case LOGIN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}
