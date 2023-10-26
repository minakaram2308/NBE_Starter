import React, {useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SplashScreen} from './screens';

import styles from './styles/App.style';
import AppLoggedIn from './AppBeforeLogin';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <View style={styles.app}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
      />
      <TopBar />

      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="accounts" component={AccountsScreen} />
        <Stack.Screen name="cards" component={CardsScreen} />
        <Stack.Screen name="utils" component={UtilsScreen} />
        <Stack.Screen name="history" component={HistoryScreen} />
      </Stack.Navigator>

      <Navigator navigation={navigator}></Navigator>
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
