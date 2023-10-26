import React from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './components/CashTransferComponents/stackNavigation';
import { TopBar, Balance, Navigator } from './components'
import { HomeScreen, AccountsScreen, CardsScreen, UtilsScreen, HistoryScreen } from './screens'

import styles from './styles/App.style'

//const Stack = createNativeStackNavigator();

export const App = () => {

  return (
  

    <NavigationContainer>
    <StackNavigation/>
    </NavigationContainer>
    
      );
};