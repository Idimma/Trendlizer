import { StyleSheet } from 'react-native';

const BaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  center: {

  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  }
});

export default BaseStyles;
