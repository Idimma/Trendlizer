import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Pager from './pagers';
import {resizeFont, widthDIP} from "../utils/helper";
import {Colors} from "../utils/Colors";
import {CustomDrawerContentComponent} from "../partials/Common";


console.disableYellowBox

const TabStack = createBottomTabNavigator({
    AMC: {
        screen: createStackNavigator({
            AMC,
            Form,
            Single,
            Individual,
            Joint,
            Child,
            Corporate,
            Choose,
            Latest,
        }, {
            initialRouteName: 'Single', headerMode: 'none',
            navigationOptions: {
                gesturesEnabled: false,
            },
        }),
        navigationOptions: {
            tabBarLabel: 'Funds',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/settings.png')} style={{
                height: 20, width: 20,
                tintColor: tintColor
            }}/>)
        },


    },
    Investment: {
        screen: Choose,
        navigationOptions: {
            tabBarLabel: 'My Investment',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/bar.png')} style={{
                    height: 20, width: 20,
                    tintColor: tintColor
                }}/>
            )
        },
    },
    Tools: {
        screen: Latest,
        navigationOptions: {
            tabBarLabel: 'Tools',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/settings-bars.png')} style={{
                    height: 20, width: 20,
                    tintColor: tintColor
                }}/>
            )
        },
    },
    News: {
        screen: News,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/chat.png')} style={{
                    height: 20, width: 20,
                    tintColor: tintColor
                }}/>
            )
        },
    },
}, {
    initialRouteName: 'AMC',
    tabBarOptions: {
        activeTintColor: "#ffffff",
        inactiveTintColor: 'grey',
        labelStyle: {
            fontSize: resizeFont(12),
        },
        style: {
            backgroundColor: Colors.PRIMARY,
            borderTopWidth: 0,
            shadowOffset: {
                width: 5,
                height: 3
            },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        }
    }
});


const Dashboard = createDrawerNavigator(
    {
        Panel: {
            screen: TabStack,

        },
    }, {
        drawerBackgroundColor: '#FAFAFA',
        drawerWidth: widthDIP(298),
        contentComponent: CustomDrawerContentComponent,
        initialRouteName: 'Panel',
        activiteTintColor: Colors.PRIMARY,
        navigationOptions: {
            header: null,
        },
    }
);


const AppNavigator = createStackNavigator({
    Pager,
}, {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    },
    initialRouteName: 'Pager',
});

export default AppNavigator;