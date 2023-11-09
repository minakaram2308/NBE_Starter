import {
  StyleSheet
} from 'react-native';
import { colors } from '../../constants/Colors';
import { shadeColor } from '../../util/Utilities';


export default styles = StyleSheet.create({

  navigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
    padding: 10,

    // Fixed bottom navigation @KAY
    justifyContent: 'space-between',
  },

  activeNavBtn: {
    backgroundColor: '#007236',
    height: 65,
    width: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginEnd: 5,
  },

  activeNavIcon: {
    color: '#fff',
  },

  activeNavText: {
    color: '#fff',
  },

  navBtn: {
    backgroundColor: '#F1F3FB',
    height: 65,
    width: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginEnd: 5,
    borderRadius: 20,
    // marginHorizontal:10
  },

  navIcon: {
    color: shadeColor(colors.darkGray, 100),
  },

  navText: {
    color: shadeColor(colors.darkGray, 100),
  },

});