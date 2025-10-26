import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student } from '@/types';
import { mockStudent } from '@/lib/mockData';

interface AuthContextType {
  student: Student | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    const savedStudent = localStorage.getItem('ensem_student');
    if (savedStudent) {
      setStudent(JSON.parse(savedStudent));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Email validation stricte
    const emailRegex = /^[a-z]+\.[a-z]+\.etu(23|24|00)@ensem\.ac\.ma$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    // Simulation de connexion
    // En production, ceci serait remplacé par un appel API réel
    if (password.length > 0) {
      const studentData = mockStudent;
      setStudent(studentData);
      localStorage.setItem('ensem_student', JSON.stringify(studentData));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setStudent(null);
    localStorage.removeItem('ensem_student');
  };

  const isAuthenticated = !!student;

  return (
    <AuthContext.Provider value={{ student, login, logout, isAuthenticated }}>
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
