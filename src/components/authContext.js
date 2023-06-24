import React, { createContext, useState } from 'react';
import axios from 'axios';
import { config }  from '../config.js';
 
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const requestAuth = async (request, callback) => {
    axios.post(`${config.apiRoute}/account/user/login`, {
      email: request.email,
      password: request.password
    }).then((data) => {
      setIsAuthenticated(true);
      if(typeof callback === 'function') callback();
    }).catch(() => {
      setIsAuthenticated(false);
    })
  }

  // Any other authentication-related functions or state can be defined here

  return (
    <AuthContext.Provider value={{ isAuthenticated, requestAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
