import React, { Component } from 'react';
import { View, ActivityIndicator, BackHandler, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { Helper } from '../../utils';
import Base from './styles';

const	{
  bool,
  any,
  string
}	=	PropTypes;

class Spinner extends Component {

  static	propTypes	=	{
      children:	any,
      center: bool,
      bottom:	bool,
      backHandler: bool,
      spinnerStyle:	ViewPropTypes.style,
      textStyle: ViewPropTypes.style,
      spinnerColor: string,
      spinnerSize: string
  };

  state = {
    backHandler: true
  };

  componentWillMount() {
    this.setState({
      backHandler: this.props.backHandler
    });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress() {
    if (this.state.backHandler) {
      return true;
    }
    return false;
  }


  render() {
    const	{
        text,
        spinnerStyle,
        textStyle,
        center,
        //bottom,
        spinnerColor,
        spinnerSize
    }	=	this.props;
    return (
      <View
        style={[
          Base.container,
          //bottom ? Base.bottom : Base.bottom,
          center ? Base.centering : Base.bottom,
          spinnerStyle
        ]}
      >
        <ActivityIndicator
           animating
           color={spinnerColor || '#00E7FF'}
           style={
             [Base.centering, {
             }
           ]}
           size={spinnerSize || 'large'}
        />
        <Text
          style={textStyle}
        >{text || 'Please Wait'}</Text>
      </View>
    );
  }
}

export { Spinner };
