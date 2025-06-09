import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignin = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signUpWithGoogle = () => {
         setLoading(true);
        return signInWithPopup(auth,provider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // console.log(user)
    const userinfo = {
        createUser,
        userSignin,
        userSignOut,
        user,
        loading,
        signUpWithGoogle
    }
    return (
        <AuthContext value={userinfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;