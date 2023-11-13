import {Dimensions, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  splashContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#F1F3FB',
  },
  splash: {
    flex: 9,
  },
  logo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
