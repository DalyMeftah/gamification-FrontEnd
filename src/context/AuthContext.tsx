import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthResponse } from '../types/auth';
import { setAuthToken, clearAuthToken } from '../services/api';

interface AuthContextType {
  user: User | null;
  login: (authResponse: AuthResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setAuthToken(storedToken);
    }
  }, []);

  const login = (authResponse: AuthResponse) => {
    setUser(authResponse.user);
    localStorage.setItem('user', JSON.stringify(authResponse.user));
    localStorage.setItem('token', authResponse.token);
    setAuthToken(authResponse.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    clearAuthToken();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
