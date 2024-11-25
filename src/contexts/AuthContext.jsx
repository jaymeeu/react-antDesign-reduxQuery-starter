import Loading from '@/components/Loading';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/utils/LocalStorageUtil';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser()
  }, [loading]);

  const setUserData = (data)=>{
    setUser(data);
  }

  const getUser = async () => {
    const storedUser = await getLocalStorage('iUser_');
    if (storedUser) {
      setUserData(storedUser)
      setLoading(false);
    }
      setLoading(false);
  }

  const login = (userData) => {
    setUserData(userData.user)
    setLocalStorage('iUser_', JSON.stringify(userData.user));
    setLocalStorage('iToken_', JSON.stringify(userData.token));
  };

  const logout = () => {
    setUser(null);
    clearLocalStorage();
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  if (loading) {
    return <Loading /> 
  }

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};