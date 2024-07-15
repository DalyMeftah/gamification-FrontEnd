import { useContext } from 'react';

import { User, AuthResponse } from '../types/auth';
import { AuthContext } from '../context/AuthContext';

interface AuthContextType {
  user: User | null;
  login: (authResponse: AuthResponse) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return {
    ...context,
    isAuthenticated: !!context.user,
  };
};
