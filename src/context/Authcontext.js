// import { createContext, useEffect, useState, useContext } from "react";
// import { createUserWithEmailAndPassword, 
//     signInWithEmailAndPassword, 
//     signOut, 
//     onAuthStateChanged  } 
//     from "firebase/auth";
// import { auth } from "../firebase";




// const AuthContext = createContext();

// export const AuthcontextProvider = ({children}) => {
    // const [user, setUser] = useState({});

    // const CreatnewUser = (email, password) =>{
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    // const signInUser = (email, password) =>{
    //     signInWithEmailAndPassword(auth, email, password)
    // }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
    //         console.log(currentUser)
    //         setUser(currentUser)
    //     })
    //     return() =>{
    //         unsubscribe();
    //     }
    // },[])
  

//     return (
//         <AuthContext.Provider value={{signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged}} >
//             {children}
//         </AuthContext.Provider>

//     )
    
   
// }
// export const userAuth = () => {
//   return AuthContext(createContext)
// }