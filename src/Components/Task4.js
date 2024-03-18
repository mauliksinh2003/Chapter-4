import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);


const ThemeContextProvider = ({ children, themes }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const changeTheme = (theme) => {
    if (themes.includes(theme)) {
      setCurrentTheme(theme);
    } else {
      console.error('Theme not found');
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <div className={`app ${currentTheme}`}>
      <h2>Themed Component</h2>
      <p>Current Theme: {currentTheme}</p>
      <button onClick={() => changeTheme('light')}>Light Theme</button>
      <button onClick={() => changeTheme('dark')}>Dark Theme</button>
      <button onClick={() => changeTheme('blue')}>Blue Theme</button>
      <button onClick={() => changeTheme('red')}>Red Theme</button>
    </div>
  );
};

const Task4 = () => {
  const themes = ['light', 'dark', 'blue', 'red'];

  return (
    <ThemeContextProvider themes={themes}>
      <div>
        <h1>Task 4</h1>
        <ThemedComponent />
      </div>
    </ThemeContextProvider>
  );
};

export default Task4;
