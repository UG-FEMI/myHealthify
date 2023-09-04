import {React, createContext} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../firebase';


const Authcontext = createContext()

  
export function AuthcontextProvider({ Children}) {

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
  return (
    <Authcontext.Provider value={creatUser}>
      {Children}
    </Authcontext.Provider>
  )
}
export const useAuth = () => {
   return Authcontext
}

