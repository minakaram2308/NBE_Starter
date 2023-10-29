import React, {useState} from 'react';
import LoginContext from './login-context';

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');

  const value = {
    loggedIn,
    rememberMe,
    toggleRememberMe: () => {
      setRememberMe(previousState => !previousState);
    },
    login: name => {
      setUsername(name);
      setLoggedIn(true);
    },
    logout: () => {
      setUsername('');
      setLoggedIn(false);
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
