import {Notifications} from 'expo';

import * as Permissions from 'expo-permissions';

import {AsyncStorage, PixelRatio} from "react-native"
import {Dimension} from "./Dimensions";

class Helper {

    constructor() {
        this.lang = 'en';
        this.selectedDate = new Date();
        this.fetchCount = 0;
        this.fetchCountDriver = 0;
        this.fetchCountLaundry = 0;
        this.isGesturesEnabled = true;
        this.tabBarVisible = true;
    }

    setTabBarVisible(tabBarVisible) {
        this.tabBarVisible = tabBarVisible;
    }

    getTabBarVisible() {
        return this.tabBarVisible;
    }

    setGesturesEnabled(isGesturesEnabled) {
        this.isGesturesEnabled = isGesturesEnabled;
    }

    getGesturesEnabled() {
        return this.isGesturesEnabled;
    }

    setFetchCountLaundry(fetchCountLaundry) {
        this.fetchCountLaundry = fetchCountLaundry;
    }

    getFetchCountLaundry() {
        return this.fetchCountLaundry;
    }

    setFetchCountDriver(fetchCountDriver) {
        this.fetchCountDriver = fetchCountDriver;
    }

    getFetchCountDriver() {
        return this.fetchCountDriver;
    }

    setFetchCount(fetchCount) {
        this.fetchCount = fetchCount;
    }

    getFetchCount() {
        return this.fetchCount;
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    setSelectedDate(date) {
        this.selectedDate = date;
    }

    getSelectedDate() {
        return this.selectedDate;
    }

    static isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }


    static async storeItem(key, item) {
        try {
            //we want to wait for the Promise returned by AsyncStorage.setItem()
            //to be resolved to the actual value before returning the value
            let jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            console.log(jsonOfItem);
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getItem(key) {
        try {
            let retrievedItem = await AsyncStorage.getItem(key);
            let item = JSON.parse(retrievedItem);
            return item;
        } catch (error) {
            console.log(error.message);
        }
    }

    static async registerForPushNotifications(uid, handleNotification) {
        const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);

        if (status !== 'granted') {
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
                return;
            }
        }

        const token = await Notifications.getExpoPushTokenAsync();

        this.setToken(token);
        if (uid !== '' && uid !== null) {
            // LaundryService.update(uid, {pushToken: token || null});
            // this.subscription = Notifications.addListener(handleNotification);
        }
        console.log(this.getToken());
    }

    static sendPushNotification(token, title, body) {
        console.log(this.getToken());
        if (token) {
            return fetch('https://exp.host/--/api/v2/push/send', {
                body: JSON.stringify({
                    to: token,
                    title,
                    body,
                    data: {message: `${title} - ${body}`},
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
        }
        // return Promise.of(null);
    }

}

export default new Helper();

const HEIGHT = 832;

export const APP_DB = "DATA";

export function resizeFont(dp) {
    const ratio = PixelRatio.getFontScale();
    //
    // if (PixelRatio.get() > 3) {
    //     dp = dp - 3
    // }
    // if (PixelRatio.get() === 3) {
    //     dp = dp - 1
    // }
    // if (PixelRatio.get() < 3) {
    //     dp = dp + 1
    // }
    // if (ratio < 1) {
    //     return dp + Math.round(dp * (1 - ratio))
    // } else if (ratio > 1 && ratio < 2) {
    //     return dp - Math.round(dp * (ratio - 1))
    // } else if (ratio === 2 || ratio > 2) {
    //     return dp - (dp * 0.2)
    // } else {
    //     return dp
    // }
    return heightDIP(dp) + 2;
}

export function heightDIP(px = HEIGHT) {
    return Math.round(Dimension.DEVICE_HEIGHT * (px / HEIGHT));
}

export function widthDIP(px = 375) {
    return Math.round(Dimension.DEVICE_WIDTH * (px / 375));
}

export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

export function handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailCheckRegex.test(email)
}

export function alertPage(context, type, title, message) {
    context.dropdown.alertWithType(type, title, message);
}