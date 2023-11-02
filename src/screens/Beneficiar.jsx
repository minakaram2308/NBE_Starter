import React, { useContext } from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {TopBar} from '../components';
import {UserBar} from '../components/UserBar'
import TransactionHistory from './TransactionHistory';
import { lightColors } from '../styles/components/Modes/LightColors';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { ModeContext,  } from '../Context/ModeContext';
export function Beneficiar({mode}) {
  const {darkTheme, toggle} = useContext(ModeContext);
  let  styles = darkTheme ? darkColors.darkBackgrd : lightColors.lightBackgrd
  const transactions = [
    {
      id: 1,
      reason: 'Salary deposit',
      date: '2023-10-23',
      amount: '$1000',
      state: 'Completed',
    },
    {
      id: 2,
      reason: 'Utility bill payment',
      date: '2023-10-25',
      amount: '$200',
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 2,
      reason: 'Utility bill payment',
      date: '2023-10-25',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 2,
      reason: 'Utility bill payment',
      date: '2023-10-25',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 2,
      reason: 'Utility bill payment',
      date: '2023-10-25',
      amount: '$500',
      state: 'Completed',
    },
    {
      id: 2,
      reason: 'Utility bill payment',
      date: '2023-10-25',
      amount: '$500',
      state: 'Completed',
    },
  ];
  return (
    <ScrollView style={{backgroundColor:  styles}}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1F3FB" />
      <TopBar/>
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: 'white',
          elevation: 8,
          borderRadius: 12.5,
          marginTop: 16,
        }}>
        <UserBar />
      </View>
      <Text style={styles.transactiontextStyle}>{transactions ? '': 'Transaction History'}</Text>
      <TransactionHistory data={transactions}/>
    </ScrollView>
  );
}

