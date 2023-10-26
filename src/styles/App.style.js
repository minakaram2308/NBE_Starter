import {StyleSheet} from 'react-native';
import { colors } from '../constants/Colors';

export default styles = StyleSheet.create({
  app: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  appLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
