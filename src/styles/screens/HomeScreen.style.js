import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  home: {
    height: '100%',
  },
  borderImageContainer: {
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8b8b8',
  },
  ImageContainer: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  LogoContainer: {

    marginTop: 21,
    marginLeft: 20,
    marginBottom: 25,
    marginRight: 20,
    flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
});
