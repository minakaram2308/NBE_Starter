import React, {useContext, useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
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

import styles from './styles/App.style';
import {colors} from './constants/Colors';
import {Navigator, TopBar} from './components';
import LoginContext from './store/Authentication/login-context';

const Stack = createNativeStackNavigator();

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
                {/* //TODO - Add signup here */}
                {/* <Stack.Screen name="login" component={LoginScreen} /> */}
              </Stack.Navigator>
            </>
          )}
        </View>
      </NavigationContainer>
    </>
  );
};
