import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {TopBar} from '../components';
import {UserBar} from '../components/UserBar';
import TransactionHistory from './TransactionHistory';

function Beneficiar() {
  const beneficiaries = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      branch: 'Cairo',
      accountNumber: '1234567890',
      phoneNumber: '+201234567890',
      email: 'john.doe@example.com',
      transactions: [
        {
          id: 1,
          reason: 'Salary deposit',
          date: '2023-10-23',
          amount: 1000,
          state: 'Completed',
        },
        {
          id: 2,
          reason: 'Utility bill payment',
          date: '2023-10-25',
          amount: 200,
          state: 'Completed',
        },
        {
          id: 3,
          reason: 'Online shopping purchase',
          date: '2023-10-27',
          amount: 500,
          state: 'Completed',
        },
      ],
    },
  ];
  const transactions= [
    {
      id: 1,
      reason: 'Salary deposit',
      date: '2023-10-23',
      amount: 1000,
      state: 'Completed',
    },
    {
      id: 2,
      reason: 'Utility bill payment',
      date: '2023-10-25',
      amount: 200,
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: 500,
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: 500,
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: 500,
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: 500,
      state: 'Completed',
    },
    {
      id: 3,
      reason: 'Online shopping purchase',
      date: '2023-10-27',
      amount: 500,
      state: 'Completed',
    },
    {
        id: 2,
        reason: 'Utility bill payment',
        date: '2023-10-25',
        amount: 200,
        state: 'Completed',
      },
      {
        id: 2,
        reason: 'Utility bill payment',
        date: '2023-10-25',
        amount: 200,
        state: 'Completed',
      },
      {
        id: 2,
        reason: 'Utility bill payment',
        date: '2023-10-25',
        amount: 200,
        state: 'Completed',
      },
      {
        id: 2,
        reason: 'Utility bill payment',
        date: '2023-10-25',
        amount: 200,
        state: 'Completed',
      },
  ]
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#F1F3FB" />
      <TopBar></TopBar>
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
      <Text style={styles.transactiontextStyle}>Transaction History</Text>
      <TransactionHistory data={transactions}/>
    </ScrollView>
  );
}

export default Beneficiar;

const styles = StyleSheet.create({
  transactiontextStyle: {
    padding: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C2437',

  },
});
