import {StyleSheet} from 'react-native';
import {Colors} from './Colors';
import {Dimension} from './Dimensions';
import {heightDIP, resizeFont, widthDIP} from './helper';
const {PRIMARY, PRIMARY_WHITE} = Colors;
export const Styles = StyleSheet.create({
    underline: {
        backgroundColor: PRIMARY,
        width: Dimension.DEVICE_WIDTH * (88 / 375),
        height: 2,
        alignSelf: 'center',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        elevation: 1,
        shadowRadius: 16,
        marginBottom: 30
    },

});