import React, { useState } from 'react'
import { createContext, useEffect, useContext } from 'react'
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


const AuthContext = createContext();

export function useAuthContext(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

   

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signout(){
        signOut(auth).then(() => {
            console.log("signout success")

        }).catch((error) => { 
            console.log("failed to sign out")
        })
    }

    useEffect(()=>{
        setLoading(true)

        onAuthStateChanged(auth, (user)=>{
            if (user){
                setCurrentUser(user)
                
                
            }
            setLoading(false)
        })
            
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        signout,
        

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
