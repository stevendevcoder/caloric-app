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
  const [loadingData, setLoadingData] = useState(true);

  const register = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const setPersonalData = (data) => {
    setDoc(doc(db, 'users', user.uid), data);
    console.log("Estableciendo datos:", data)
  }

  const getAccountData = async () => {
    if(user) {
      try {
        const q = await getDoc(doc(db, 'users', user.uid))
        const response = q.data();
        setData(response);
        console.log("Obteniendo datos:", response)
      } catch (error) {
        console.log("Error getDoc: ",error)
      }
    } else {
      console.log("No se puede obtener datos porque el usuario no está logueado")
    }
  }
    
  const logout = () => signOut(auth);

  useEffect(() => {
    console.log("useeffect")
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser) { 
        console.log("[SESION]: ",currentUser.uid)
      }
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  return (
    <authContext.Provider value={{ 
      register, login, data, user, logout, loading, 
      setPersonalData, getAccountData, loadingData, setLoadingData
    }}>
      {children}
    </authContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
