import React, {useState} from 'react';
import LanguageContext from './language-context';

function LanguageProvider(props) {
  const [language, setLanguage] = useState('EN');
  const changeLanguageHandler = () => {
    setLanguage(previousState => (previousState === 'EN' ? 'AR' : 'EN'));
  };

  const value = {
    language,
    changeLanguage: changeLanguageHandler,
  };

  return (
    <LanguageContext.Provider value={value}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
