import { firebaseApp } from './firebase'
import { dispatch } from './state/store'
import { useEffect, useState } from 'react'
import { useRouter } from './useRouter'
import { RouteName } from './types/RouteName'

export const useAuthActions = () => {
    const { setRoute } = useRouter()
    const [signInError, setSignInError] = useState('')
    const [createAccountError, setCreateAccountError] = useState('')
    const [loading, setLoading] = useState(false)

    const createAccount = async (email: string, password: string) => {
        setLoading(true)
        try {
            await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {
            setCreateAccountError(e.message)
        }
        setLoading(false)
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true)
        try {
            await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            if (e.code === 'auth/user-not-found') {
                setSignInError('User not found')
            } else {
                setSignInError(e.message)
            }
        }
        setLoading(false)
    }

    const signOut = async () => {
        setLoading(true)
        await firebaseApp.auth().signOut()
        setRoute(RouteName.Home)
        setLoading(false)
    }

    return { signIn, signOut, createAccount, signInError, createAccountError, loading }
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
