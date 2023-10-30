import React,{useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { darkColors } from '../../styles/components/Modes/DarkColors';
import { lightColors } from '../../styles/components/Modes/LightColors';
import { ModeContext, ThemeProvider } from '../../context/ModeContext';

function TransactionCard({data,mode}) {
  const {darkTheme, toggle} = useContext(ModeContext);

  const textStyles = darkTheme === true? darkColors.darkText : lightColors.lightText;
  return (
    <View style={style.rootContainer}>
        {data.map((item, index) => (
      <View style={style.cardContainer} key={index}>
        <View style={style.transactionDetails}>
          <Text style={[style.transactionTitle, {color: textStyles}]}>{item.reason}</Text>
          <Text style={[style.transactionDate,{color: textStyles}]}>{item.date}</Text>
        </View>
      <Text style={[style.transactionCost,{color: textStyles}]}>{item.amount}</Text>
      </View>
      ))}
    </View>
  );
}

export default TransactionCard;

const style = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,

  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(183,183,183,0.6)',
    alignItems: 'center',
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  transactionTitle: {
    fontSize: 18,
    color: '#1C2437',
    marginVertical: 7,
    fontWeight: '500',
  },
  transactionDate: {
    marginBottom: 15,
    opacity:0.6
  },
  transactionCost: {
    color: '#1C2437',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
const darkstyle = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  cardContainer: {
    
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(183,183,183,0.6)',
    alignItems: 'center',
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  transactionTitle: {
    fontSize: 18,
    color: 'white',
    marginVertical: 7,
    fontWeight: '500',
  },
  transactionDate: {
    color:"white",
    marginBottom: 15,
    opacity:0.6
  },
  transactionCost: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});