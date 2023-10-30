import React, {createContext} from 'react';

const LanguageContext = createContext({
  language: '',
  changeLanguage: () => {},
});

export default LanguageContext;
