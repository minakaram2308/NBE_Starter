import React from 'react';
import LanguageProvider from './store/Language/LanguageProvider';
import LoginProvider from './store/Authentication/LoginProvider';
import {App} from './App';

const AppProviders = () => {
  return (
    <LoginProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </LoginProvider>
  );
};

export default AppProviders;
