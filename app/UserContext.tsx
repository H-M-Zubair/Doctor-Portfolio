
"use client"
import axios from 'axios';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}
interface IUserContext {
  authUser: IUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
const UserContext = createContext<IUserContext | undefined>(undefined);
export const useUser = (): IUserContext => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<IUser | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true });
        console.log("response",response.data.user)
        setAuthUser(response.data.user);
      } catch (error) {
      }
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </UserContext.Provider>
  );
};
