import React from 'react';
import {View, StatusBar} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopBar, Balance, Navigator} from './components';
import {
  HomeScreen,
  AccountsScreen,
  CardsScreen,
  UtilsScreen,
  HistoryScreen,
} from './screens';

import styles from './styles/App.style';
import {colors} from './constants/Colors';

const Stack = createNativeStackNavigator();

function AppLoggedIn() {
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
}

export default AppLoggedIn;
