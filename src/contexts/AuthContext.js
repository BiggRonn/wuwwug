import React, { useState } from 'react'
import { createContext, useEffect, useContext } from 'react'
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

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

    useEffect(()=>{
        setLoading(true)

        auth.onAuthStateChanged(user=>{
            if (user){
                setCurrentUser(user)
                setLoading(false);
                console.log("AuthStateChanged line30 HEAFHEHA!!!")
            }
            setLoading(false)
        })
            
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
