import React from 'react';
import LanguageProvider from './store/Language/LanguageProvider';
import LoginProvider from './store/Authentication/LoginProvider';
import {App} from './App';
import {ThemeProvider} from '@react-navigation/native';

const AppProviders = () => {
  return (
    <ThemeProvider>
      <LoginProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </LoginProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
