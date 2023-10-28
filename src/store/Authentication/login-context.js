import React, {createContext} from 'react';

const LoginContext = createContext({
  loggedIn: false,
  rememberMe: false,
  toggleRememberMe: () => {},
  login: () => {},
  logout: () => {},
});

export default LoginContext;
