import React, {useEffect, useState} from 'react';
import LanguageContext from './language-context';
import {getData, saveData} from '../../util/Utilities';

function LanguageProvider(props) {
  const [language, setLanguage] = useState('EN');

  const changeLanguageHandler = () => {
    saveData('languageDetails', {language: language === 'EN' ? 'AR' : 'EN'});
    setLanguage(previousState => (previousState === 'EN' ? 'AR' : 'EN'));
  };

  useEffect(() => {
    getData('languageDetails').then(data => {
      if (data) {
        setLanguage(data.language);
      } else {
        setLanguage('EN');
      }
    });
  }, []);

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
