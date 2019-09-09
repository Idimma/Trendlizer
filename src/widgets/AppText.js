import React from 'react';
import {Text} from 'react-native';

export class AppText extends React.Component {
    render() {
        return <Text
            allowFontScaling={false}
            {...this.props}
            style={
                [
                    {
                        fontSize: this.props.title ? 17 : 12,
                        fontFamily: this.props.title ? 'avenir-bold' : 'avenir-regular',
                        lineHeight: this.props.title ? 20 : 14,
                        letterSpacing: 0.291667,
                        textAlign: this.props.center ? 'center' : 'left',
                        marginBottom: this.props.title ? this.props.nomargin ? 0 : 8 : 2,
                        fontWeight: (this.props.bold || this.props.title) ? 'bold' : 'normal'
                    },
                    this.props.style,
                ]
            }/>;
    }
}
