import React from "react";
import {Image, TouchableOpacity, ScrollView, SafeAreaView} from "react-native";
import {createBottomTabNavigator, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Pager from './pagers';
import Settings from './Settings';
import Home from './Home';
import {resizeFont, widthDIP} from "../utils/helper";
import {Colors} from "../utils/Colors";
import Analytics from "./Analytics";


console.disableYellowBox




export const CustomDrawerContentComponent = props => (
    <SafeAreaView style={{marginTop: 35, paddingBottom: 40}}>

        <ScrollView style={{}}>

            {/*<TouchableOpacity*/}
            {/*    onPress={() => props.navigation.navigate('AMC')}*/}
            {/*    style={Styles.btnRow}>*/}
            {/*    <Image source={USERS} resizeMode="contain" style={imgIcon}/>*/}
            {/*    <Text allowFontScaling={false} style={{color: '#292874', fontWeight: 'bold',}}>*/}
            {/*        AMC’s*/}
            {/*    </Text>*/}
            {/*</TouchableOpacity>*/}


        </ScrollView>
    </SafeAreaView>
);

const TabStack = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Tweets',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/tweeter.png')} style={{
                height: 20, width: 20,
                tintColor: tintColor
            }}/>)
        },


    },
    Analytics: {
        screen: Analytics,
        navigationOptions: {
            tabBarLabel: 'Analysis',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/analytics-tab.png')} style={{
                    height: 20, width: 20,
                    tintColor: tintColor
                }}/>
            )
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({
                             tintColor
                         }) => (<Image source={require('../../assets/images/settings.png')} style={{
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
    Dashboard
}, {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    },
    initialRouteName: 'Pager',
});

export default AppNavigator;