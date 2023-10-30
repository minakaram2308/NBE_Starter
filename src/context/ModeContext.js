import React from 'react';

export const ModeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const toggle = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ModeContext.Provider value={{darkTheme, toggle}}>
      {children}
    </ModeContext.Provider>
  );
};


