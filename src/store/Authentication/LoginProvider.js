import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginContext from './login-context';
import {getData, saveData} from '../../util/Utilities';

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    getData('loginDetails').then(data => {
      if (data && data.rememberMe) {
        setLoggedIn(data.loggedIn);
        setRememberMe(data.rememberMe);
        setUsername(data.username);
      } else {
        saveData('loginDetails', {
          loggedIn: false,
          rememberMe: false,
          username: '',
        });
      }
    });
  }, []);

  const value = {
    loggedIn,
    rememberMe,
    toggleRememberMe: () => {
      setRememberMe(previousState => !previousState);
    },
    login: name => {
      setUsername(name);
      setLoggedIn(true);

      if (rememberMe) {
        saveData('loginDetails', {loggedIn: true, rememberMe, username: name});
      }
    },
    logout: () => {
      setUsername('');
      setLoggedIn(false);

      saveData('loginDetails', {
        loggedIn: false,
        rememberMe: false,
        username: '',
      });
    },
    username,
  };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
