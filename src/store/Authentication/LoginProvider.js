import React, {useState} from 'react';
import LoginContext from './login-context';

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const value = {
    loggedIn,
    rememberMe,
    toggleRememberMe: () => {
      setRememberMe(previousState => !previousState);
    },
    login: () => {
      setLoggedIn(true);
    },
    logout: () => {
      setLoggedIn(false);
    },
  };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
