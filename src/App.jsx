
import React from 'react';
import {View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountsScreen, CardsScreen, HistoryScreen, HomeScreen, UtilsScreen} from './screens';

import styles from './styles/App.style'
//import styles from './styles/App.style';
import { colors } from './constants/Colors';


const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
       <View style={styles.app}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
      />
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
           <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="accounts" component={AccountsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="cards" component={CardsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="utils" component={UtilsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="history" component={HistoryScreen} options={{ headerShown: false }} />  
        </Stack.Navigator>

       </View > 
    </NavigationContainer>
   
  );

};
