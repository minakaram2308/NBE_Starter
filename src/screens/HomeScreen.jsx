import React from 'react';
import { View } from 'react-native';
import { Balance, More, SendMoney } from './../components'

import styles from './../styles/screens/HomeScreen.style'
import AirPayScreen from './AirPayScreen';

export const HomeScreen = ({ navigation }) => {
  return (
    <AirPayScreen/>
  )
}