import { firebaseApp } from './firebase'
import { dispatch } from './state/store'
import { useEffect, useState } from 'react'
import { useRouter } from './useRouter'
import { RouteName } from './types/RouteName'

export const useAuthActions = () => {
    const { setRoute } = useRouter()
    const [signInError, setSignInError] = useState('')
    const [createAccountError, setCreateAccountError] = useState('')

    const createAccount = async (email: string, password: string) => {
        try {
            await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {
            setCreateAccountError(e.message)
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            if (e.code === 'auth/user-not-found') {
                setSignInError('User not found')
            } else {
                setSignInError(e.message)
            }
        }
    }

    const signOut = () => {
        setRoute(RouteName.Home)
        firebaseApp.auth().signOut()
    }

    return { signIn, signOut, createAccount, signInError, createAccountError }
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
