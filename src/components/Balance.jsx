import React from 'react';
import { View, Text } from 'react-native';

import styles from './../styles/components/Balance.style'

export const Balance = () => {
  return (
    <View style={styles.balance}>

      <View style={styles.header}>
        <Text style={styles.title}>Balance</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>$1,568,983.25</Text>
      </View>

    </View>
  )
}