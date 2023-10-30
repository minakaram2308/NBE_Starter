import React, { useContext } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TransactionCard from '../components/utils/TransactionCard';
import { lightColors } from '../styles/components/Modes/Light';
import { darkColors } from '../styles/components/Modes/Dark';
import { ModeContext } from '../Context/ModeContext';
let screen;
function TransactionHistory({data}) {
  const {darkTheme, toggle} = useContext(ModeContext);
  const style = darkTheme === true? darkColors.darkText : lightColors.lightText;
  if (data) {
    screen = (
      <View style={{width:'100%'}}>
        <TransactionCard data={data}/>
      </View>
    );
  } else {
    screen = (
      <View style={styles.imageContainer}>
        <Image source={require('../images/Group26780.png')} />
        <Text style={[styles.historyText, {color: style}]}>No History</Text>
        <Text style={[styles.historyDescription,{color:style}]}>
          Not a single transaction was made to this account
        </Text>
      </View>
    );
  }
  return <View style={styles.rootContainer}>{screen}</View>;
}

export default TransactionHistory;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
    marginTop: 100,
  },
  historyText: {
    fontSize: 24,
    color: '#34343F',
  },
  historyDescription: {
    fontSize: 18,
    color: '#464665',
    maxWidth: '70%',
    textAlign: 'center',
  },
});


const darkStyles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center',
    marginTop: 100,
  },
  historyText: {
    fontSize: 24,
    color: 'white',
  },
  historyDescription: {
    fontSize: 18,
    color: 'white',
    maxWidth: '70%',
    textAlign: 'center',
  },
});