import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoggedInMessage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Welcome, you are logged in!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const LoggedOutMessage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>You are not logged in</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

const AuthExample = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <LoggedInMessage /> : <LoggedOutMessage />;
};


const App = () => {
  return (
    <AuthProvider>
      <h1>Task1</h1>

      <AuthExample />
    </AuthProvider>
  );
};

export default App;
