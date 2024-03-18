import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);


const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h2>Themed Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const Task2 = () => {
  return (
    <ThemeContextProvider>
      <div className='App'>
        <h1>Task 2</h1>
        <ThemedComponent />
      </div>
    </ThemeContextProvider>
  );
};

export default Task2 ;
