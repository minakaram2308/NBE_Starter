import {StyleSheet} from 'react-native';
import {shadeColor} from '../../../util/Utilities';
import {colors} from '../../../constants/Colors';

export default styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.green,
    // margin: 5,
    // alignSelf:"center"
    // width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPressed: {
    backgroundColor: 'white',
  },
  viewDisabled: {
    backgroundColor: shadeColor(colors.gray, -25),
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
  textPressed: {
    color: colors.green,
  },
});
