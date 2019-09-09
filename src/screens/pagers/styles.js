import { StyleSheet } from 'react-native';
import { Colors } from "../../utils/Colors";
import { Dimension } from "../../utils/Dimensions";
import { heightDIP, widthDIP } from "../../utils/helper";

const { PRIMARY, PRIMARY_BG, PRIMARY_WHITE } = Colors;
const BaseStyle = StyleSheet.create({
    container: { width: Dimension.DEVICE_WIDTH, flex: 1, height: Dimension.DEVICE_HEIGHT },
    pager: {
        backgroundColor: PRIMARY_BG,
        paddingTop: heightDIP(156),
        flex: 1,
        alignItems: 'center'
    },
    icons: {
        height: heightDIP(242),
        width: widthDIP(264),
        marginBottom: heightDIP(62),
        // marginHorizontal: 30
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        // paddingTop: 7.5,
        // paddingBottom: 7.5,
        // paddingLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#C9C9C9',
        backgroundColor: '#FFF',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        paddingLeft: 14,
        paddingRight: 14,
        // paddingTop: 7.5,
        // paddingBottom: 7.5,
    },
    text: {
        // paddingLeft: 15,
        color: '#818181',
        fontWeight: '500',
        fontSize: 18,
    },
    figureText: {
        // paddingLeft: 15,
        color: '#818181',
        fontWeight: '500',
        fontSize: 18,
    },
    backIcon: {
        // borderWidth: 1,
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0, top: heightDIP(832 - 110),
        backgroundColor: 'transparent',
        zIndex: 999,
        flexDirection: 'row',
        paddingBottom: 110,
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },

    buttonText: {
        color: PRIMARY_WHITE,
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily: 'avenir-regular',
        lineHeight: 16,
    },
    buttonContainer:
    {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default BaseStyle;
