

import Beneficiar from './screens/Beneficiar';
import React, { useContext } from 'react';
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
import { ModeContext, ThemeProvider } from './Context/ModeContext';
import AddBeneficiarScreen from './screens/AddBeneficiarScreen';
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
      <ThemeProvider>
<Beneficiar />
{/* <AddBeneficiarScreen/> */}
<Navigator navigation={navigator} ></Navigator>
    {/* <NavigationContainer>
      <View style={styles.app}>
        <TopBar />
        <StatusBar barStyle='dark-content' backgroundColor='#F1F3FB' />

        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="accounts" component={AccountsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="cards" component={CardsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="utils" component={UtilsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="history" component={HistoryScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

        <Navigator navigation={navigator}></Navigator>

      </View >
    </NavigationContainer> */}
      </ThemeProvider>
  );
};

