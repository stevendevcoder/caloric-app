import { useContext, createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context
}

export function AuthProvider({children}){
  const [user, setUser] = useState(null);

  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  useEffect(()=>{
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
  },[])

  return(
    <authContext.Provider value={{ register, login, user }}>
      {children}
    </authContext.Provider>
  )
}