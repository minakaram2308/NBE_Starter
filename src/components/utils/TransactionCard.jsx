import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TransactionCard({data}) {
  return (
    <View style={style.rootContainer}>
        {data.map((item, index) => (
      <View style={style.cardContainer} key={index}>
        <View style={style.transactionDetails}>
          <Text style={style.transactionTitle}>{item.reason}</Text>
          <Text style={style.transactionDate}>{item.date}</Text>
        </View>
        <Text style={style.transactionCost}>{item.amount}</Text>
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
    borderBottomColor: '#B7B7B7',
    alignItems: 'center',
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  transactionTitle: {
    fontSize: 18,
    color: '#1C2437',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  transactionDate: {
    marginBottom: 5,
  },
  transactionCost: {
    color: '#1C2437',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
