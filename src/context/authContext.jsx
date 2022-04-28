import React, { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { setDoc, getDoc ,doc, collection, query, onSnapshot } from "firebase/firestore";
import PropTypes from "prop-types";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    estatura: '',
    peso: '',
    sexo: 'hombre',
    edad: '',
    actividad: '',
    objetivo: ''
  })
  const [loading, setLoading] = useState(true);

  const register = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const setPersonalData = (data) => 
    setDoc(doc(db, 'users', user.uid), data);

  const getAccountData = async () => {
    if(user) {
      const q = await getDoc(doc(db, 'users', user.uid));
      const response = q.data()
      console.log("Estableciendo datos:", response)
      setData(response);
    }
  }
    
  const logout = () => signOut(auth);

  useEffect(() => {
    getAccountData();
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if(currentUser) console.log(currentUser.uid)
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  return (
    <authContext.Provider value={{ register, login, data, user, logout, loading, setPersonalData, getAccountData}}>
      {children}
    </authContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
