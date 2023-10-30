import React, {useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {AccountsScreen, CardsScreen, HistoryScreen, HomeScreen, LoginScreen, SplashScreen, UtilsScreen} from './screens';

import styles from './styles/App.style';
import AppLoggedIn from './AppBeforeLogin';
import { colors } from './constants/Colors';
import { Navigator, TopBar } from './components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export const App = () => {
  return (
    <View style={styles.app}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
      />

      {/* <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="accounts" component={AccountsScreen} />
        <Stack.Screen name="cards" component={CardsScreen} />
        <Stack.Screen name="utils" component={UtilsScreen} />
        <Stack.Screen name="history" component={HistoryScreen} />
      </Stack.Navigator> */}
      
      <Tab.Navigator initialRouteName="home" tabBar={prop => <Navigator {...prop}  screenOptions={{headerShown: false}}/>}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="accounts" component={AccountsScreen} />
      <Stack.Screen name="cards" component={CardsScreen} />
      <Stack.Screen name="utils" component={UtilsScreen} />
      <Stack.Screen name="history" component={HistoryScreen} />
      </Tab.Navigator>

      {/* <AppAfterLogin></AppAfterLogin> */}
     
    </View>

  );

  /**
    return (
      <NavigationContainer>
        <View style={styles.app}>
          <TopBar />
          <StatusBar barStyle='dark-content' backgroundColor=colors.background />
  
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="accounts" component={AccountsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="cards" component={CardsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="utils" component={UtilsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="history" component={HistoryScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
  
          <Navigator navigation={navigator}></Navigator>
  
        </View >
      </NavigationContainer>
    );
  */
};

const AppAfterLogin = () => {
  return (
   
      
      <Tab.Navigator initialRouteName="home" tabBar={prop => <Navigator {...prop}  screenOptions={{headerShown: false}}/>}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="accounts" component={AccountsScreen} />
      <Tab.Screen name="cards" component={CardsScreen} />
      <Tab.Screen name="utils" component={UtilsScreen} />
      <Tab.Screen name="history" component={HistoryScreen} />
      </Tab.Navigator>
    

  );
};
