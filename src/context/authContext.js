import { useContext, createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context
}

export function AuthProvider({children}){

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  return(
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider>
  )
}