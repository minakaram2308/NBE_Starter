import {
  StyleSheet
} from 'react-native';


export default styles = StyleSheet.create({

  navigator: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    padding: 10,
    
  },

  activeNavBtn: {
    backgroundColor: '#007236',
    height: 65,
    width: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
    
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
    marginEnd: 5,
    marginHorizontal:10
  },

  navIcon: {
    color: '#B7B7B7',
  },

  navText: {
    color: '#B7B7B7',
  },

});