import React, {useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopBar, Balance, Navigator} from './components';
import {
  HomeScreen,
  AccountsScreen,
  CardsScreen,
  UtilsScreen,
  HistoryScreen,
  SplashScreen,
  LoginScreen,
} from './screens';

import styles from './styles/App.style';
import {colors} from './constants/Colors';
import {App} from './App';
import { NavigationContainer } from '@react-navigation/native';
import LanguageProvider from './store/Language/LanguageProvider';

const Stack = createNativeStackNavigator();

function AppLoggedIn() {
  const [loading, setLoading] = useState(true);
  return (
    <LanguageProvider>
      <Modal
        visible={loading}
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}>
        <SplashScreen onAnimationFinish={setLoading.bind(null, false)} />
      </Modal>

      <NavigationContainer>
        <View style={styles.app}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.background}
            translucent={true}
          />

          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="app" component={App} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </LanguageProvider>
  );
}

export default AppLoggedIn;
