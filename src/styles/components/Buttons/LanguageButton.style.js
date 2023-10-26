import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';

export default styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    // margin: 5,
    // alignSelf:"center"
    // width: 100,
  },
  viewPressed: {
    backgroundColor: colors.green,
  },
  text: {
    // fontFamily: ,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: colors.green,
    textAlign: 'center',
    padding: 10,
  },
  textPressed: {
    color: 'white',
  },
});
