import { Dimensions, Platform, StatusBar } from 'react-native'
const IS_ANDROID = Platform.OS === 'android';
const { height, width } = Dimensions.get('window');

export const Dimension = {
    LABEL: 12,
    TITLE: 24,
    MESSAGE: 16,
    INPUT: 16,
    SPACING: 19,
    WELCOME_TITLE: 20,
    WELCOME_MARGIN: 79,
    ANDROID_STATUSBAR: 24,
    DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
    DEVICE_WIDTH: width,
    STATUSBAR_HEIGHT: StatusBar.currentHeight,
    LOGO: { width: 48, height: 64, margin: 16 },
    ICON: { marginTop: 135, marginVertical: 55, height: 234, width: 312 }
}
