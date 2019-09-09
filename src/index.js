import React from 'react';
/**
 * Redux framework is used heavily for store
 * management. The store holds the application
 * state and is passed to all react components
 * with the help of the Provider tag
 */
import { Provider, } from 'react-redux';

/**
 *  MF-mart handles the application
 *  navigation with redux framework
 */
import { store, AppNavigation} from './store';

class MF_mart extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}

export default MF_mart;