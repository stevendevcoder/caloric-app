import React, { useContext, createContext, useEffect, useState } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import PropTypes from 'prop-types';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context
}

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect( () => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  },[])

  return(
    <authContext.Provider value={{ register, login, user, logout, loading}}>
      {children}
    </authContext.Provider>
  )
}
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
