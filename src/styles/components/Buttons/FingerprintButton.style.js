import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';

export default styles = StyleSheet.create({
  view: {
    // borderRadius: 10,
    // borderColor: colors.orange,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    padding: "20%",
    borderRadius: 10,
    borderColor: colors.orange,
    borderWidth: 2,
  },
  iconPressed: {
    backgroundColor: colors.orange,
  },
});
