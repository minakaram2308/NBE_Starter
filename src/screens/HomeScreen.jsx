import React from 'react';
import { View } from 'react-native';
import { Balance, More, SendMoney } from './../components'

import styles from './../styles/screens/HomeScreen.style'

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Balance />
      <More navigation={navigation}/>
      <SendMoney />
    </View>
  )
}