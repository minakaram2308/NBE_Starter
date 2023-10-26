import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TopBar, Balance, Navigator } from './components'
import { HomeScreen, AccountsScreen, CardsScreen, UtilsScreen, HistoryScreen } from './screens'

import styles from './styles/App.style'
import { SignUpScreen } from './screens/SignUpScreen';
import { VerificationScreen } from './screens/VerificationScreen';
import { PasswordScreen } from './screens/PasswordScreen';
import { CongratulationsScreen } from './screens/CongratulationsScreen'; 

const Stack = createNativeStackNavigator();

export const App = () => {

  return (
    <NavigationContainer>
      {/* <View style={styles.app}> */}
        {/* <TopBar />
        <StatusBar barStyle='dark-content' backgroundColor='#F1F3FB' /> */}

        <Stack.Navigator initialRouteName="signup">
          <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="verification" component={VerificationScreen} options={{ headerShown: false}} />
          <Stack.Screen name="password" component={PasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="congratulations" component={CongratulationsScreen} options={{ headerShown: false }} />
           <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="accounts" component={AccountsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="cards" component={CardsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="utils" component={UtilsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="history" component={HistoryScreen} options={{ headerShown: false }} />  
        </Stack.Navigator>

        {/* <Navigator navigation={navigator}></Navigator> */}

      {/* </View > */}
    </NavigationContainer>
  );
};