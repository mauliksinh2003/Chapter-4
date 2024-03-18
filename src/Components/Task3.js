import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const NavigationBar = () => {
  const { theme } = useContext(ThemeContext);

  const navigationBarStyle = {
    backgroundColor: theme === 'light' ? 'tan' : '#333333',
    color: theme === 'light' ? '#333333' : '#ffffff',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div style={navigationBarStyle}>
      <div>
        <h2>Task 3</h2>
      </div>
      <div>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline', marginRight: '1rem' }}>Home</li>
          <li style={{ display: 'inline', marginRight: '1rem' }}>About</li>
          <li style={{ display: 'inline', marginRight: '1rem' }}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
