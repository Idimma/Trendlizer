import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import { AppLoading } from 'expo';
import * as Icon from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import MF_mart from './src';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <MF_mart/>
                </View>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/emoigms.png'),
                require('./assets/images/analytics.png'),
                require('./assets/images/hashtags.png'),
                require('./assets/images/tweeter.png'),
                require('./assets/images/tweet.png'),
                require('./assets/images/settings.png'),
                require('./assets/images/analytics-tab.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'avenir-regular': require('./assets/fonts/AvenirNextLTPro-Regular.otf'),
                'avenir-bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
                'avenir-medium': require('./assets/fonts/AvenirNextLTPro-MediumCn.otf'),
                'avenir-demi': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
                'avenir-thin': require('./assets/fonts/AvenirNextLTPro-Cn.otf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
