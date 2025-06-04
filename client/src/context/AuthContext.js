import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component wraps the app and provides auth state and functions
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Restore from localStorage
    const stored = localStorage.getItem('auth');
    if (stored) {
      const { user, token } = JSON.parse(stored);
      setUser(user);
      setToken(token);
    }
  }, []);

  const login = (data) => {
    setUser({ id: data.id, name: data.name, email: data.email });
    setToken(data.token);
    localStorage.setItem('auth', JSON.stringify({ user: { id: data.id, name: data.name, email: data.email }, token: data.token }));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth');
  };

  const getToken = () => token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};
