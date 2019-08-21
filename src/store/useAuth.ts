import { firebaseApp } from './firebase'
import { dispatch } from './state/store'
import { useEffect } from 'react'

export const useAuthActions = () => {
    const createAccount = async (email: string, password: string) => {
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    }

    const logIn = async (email: string, password: string) => {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password)
    }

    const logOut = () => {
        firebaseApp.auth().signOut()
    }

    return { logIn, logOut, createAccount }
}

export const useWatchAuthChange = () => {
    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(user => {
            dispatch({
                type: 'USER/CHANGE',
                payload: user
                    ? { email: user.email, id: user.uid, name: user.displayName }
                    : null,
            })
        })
    }, [])
}
