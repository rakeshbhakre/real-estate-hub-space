
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define user roles
export type UserRole = 'admin' | 'visitor' | 'broker';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Mock user data for demonstration
const MOCK_USERS = [
  { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' as UserRole },
  { id: '2', name: 'Visitor User', email: 'visitor@example.com', role: 'visitor' as UserRole },
  { id: '3', name: 'Broker User', email: 'broker@example.com', role: 'broker' as UserRole }
];

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, validate with API
    const matchedUser = MOCK_USERS.find(u => u.email === email);
    
    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem('user', JSON.stringify(matchedUser));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
