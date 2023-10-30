import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

export default styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 47,
    color: 'white',
  },
  background: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  fade: {
    flex: 1,
    backgroundColor: colors.fade63,
  },
  content: {
    flex: 1,
    marginTop: '15%',
  },
  header: {
    paddingHorizontal: '5%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: '5%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.fade50,
  },
  footerInner: {
    // flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    width: '40%',
    justifyContent: 'space-between',
    // alignItems:"center",
    // marginHorizontal: '25%',
  },
  footerLinks: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: colors.orange,
    // lineHeight: 14,
  },
  footerLinks2: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: 'white',
  },
  footerCopyright: {
    // flex: 1,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    color: 'white',
    marginVertical: 5,
  },
  body: {
    paddingHorizontal: '5%',
    flex: 8,
    justifyContent: 'flex-end',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
  },
});
