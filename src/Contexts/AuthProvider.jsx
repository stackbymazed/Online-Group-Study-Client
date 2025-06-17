import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [token,setToken]=useState(null)


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
        return signInWithPopup(auth, provider)
    }

    const upDateUser = (upDatedData) => {
        return updateProfile(auth.currentUser, upDatedData)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser)
            // if (currentUser) {
            //     const token =  currentUser?.getIdToken();
            //     setToken(token);
            // } else {
            //     setToken(null);
            // }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // console.log(currentUser)
    const userinfo = {
        createUser,
        userSignin,
        userSignOut,
        user,
        token,
        loading,
        signUpWithGoogle,
        upDateUser
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