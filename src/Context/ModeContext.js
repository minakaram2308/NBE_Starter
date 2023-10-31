import React, { useEffect } from 'react';
import { getData, saveData } from '../util/Utilities';

export const ModeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const toggle = () => {
    saveData('themeDetails', {darkTheme: !darkTheme});
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    getData('themeDetails').then(data => {
      if (data) {
        setDarkTheme(data.darkTheme);
      } else {
        setDarkTheme(false);
      }
    });
  }, []);

  return (
    <ModeContext.Provider value={{darkTheme, toggle}}>
      {children}
    </ModeContext.Provider>
  );
};


