import React from 'react';
import LanguageProvider from './store/Language/LanguageProvider';
import LoginProvider from './store/Authentication/LoginProvider';
import {App} from './App';
import {ThemeProvider} from './Context/ModeContext';

const AppProviders = () => {
  return (
    <LoginProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </LoginProvider>
  );
};

export default AppProviders;
