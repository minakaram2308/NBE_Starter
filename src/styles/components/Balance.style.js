import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  balance: {
    backgroundColor: '#f00',
    height: 132,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    marginHorizontal: 20,
    borderRadius: 15,
  },

  header: {
    paddingTop: 13,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd:20
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',

  },

  balanceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  balanceText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
  },
});
