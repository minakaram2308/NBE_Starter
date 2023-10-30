import React, {useContext, useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountsScreen,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  SplashScreen,
  UtilsScreen,
} from './screens';

import {Navigator, TopBar} from './components';
import LoginContext from './store/Authentication/login-context';
import { colors } from './constants/Colors';
import styles from "./styles/App.style";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  const loginContext = useContext(LoginContext);

  const [loading, setLoading] = useState(true);

  return (
    <>
      <Modal
        visible={loading}
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}>
        <SplashScreen onAnimationFinish={setLoading.bind(null, false)} />
      </Modal>

      <NavigationContainer>
        <View style={styles.app}>
          {loginContext.loggedIn && (
            <>
              <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.background}
                translucent={false}
              />
              <Tab.Navigator
                initialRouteName="home"
                tabBar={prop => (
                  <Navigator {...prop} screenOptions={{headerShown: false}} />
                )}>
                <Tab.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="accounts" component={AccountsScreen} />
                <Stack.Screen name="cards" component={CardsScreen} />
                <Stack.Screen name="utils" component={UtilsScreen} />
                <Stack.Screen name="history" component={HistoryScreen} />
              </Tab.Navigator>
            </>
          )}

          {!loginContext.loggedIn && (
            <>
              <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.background}
                translucent={true}
              />

              <Stack.Navigator
                initialRouteName="login"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="verification" component={VerificationScreen} options={{ headerShown: false}} />
                <Stack.Screen name="password" component={PasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="congratulations" component={CongratulationsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="app" component={App} />
                {/* <Stack.Screen name="login" component={LoginScreen} /> */}
              </Stack.Navigator>
            </>
          )}
        </View>
      </NavigationContainer>
    </>
  );
};
