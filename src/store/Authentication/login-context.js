import React, {createContext} from 'react';

const LoginContext = createContext({
  loggedIn: false,
  rememberMe: false,
  toggleRememberMe: () => {},
  login: name => {},
  logout: () => {},
  username: '',
});

export default LoginContext;
