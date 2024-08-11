import Loading from '@/components/Loading';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/utils/LocalStorageUtil';
// import { getRouteRep } from '@/routing/RouteCheck';
// import { links } from '@/constants/sidebar';
// import { mapResourceToPermision, mergeArrays } from '../functions/mergeArray';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);


  const [loading, setLoading] = useState(true);
  // Load user data from localStorage on component mount
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
    // console.log('am heres ')
      setLoading(false);
      console.log('end oading ')
    
  }

  const login = (userData) => {
    // Make your API call and set the user state
   
    setUserData(userData.user)
    // Save user data to localStorage
    setLocalStorage('iUser_', JSON.stringify(userData.user));
    setLocalStorage('iCompany_', JSON.stringify(userData.companyId));
    setLocalStorage('iToken_', JSON.stringify(userData.token));
  };

  const logout = () => {
    // Clear user data from state and localStorage
    setUser(null);
    clearLocalStorage();
  };

  const value = {
    user,
    login,
    logout,
    loading,
    // rolePath,

    // accesses
  };

  if (loading) {
    return <Loading /> 
  }

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};