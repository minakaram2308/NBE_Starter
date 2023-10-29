import React from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './components/CashTransferComponents/stackNavigation';

import MyTabs from './components/CashTransferComponents/Bottomnavtrial';

//const Stack = createNativeStackNavigator();

export const App = () => {

  return (
  
<NavigationContainer>
<MyTabs/>
 </NavigationContainer>
    
      );
};