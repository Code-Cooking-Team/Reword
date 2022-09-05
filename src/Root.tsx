import { getAuth } from 'firebase/auth' // Firebase v9+
import { getFirestore } from 'firebase/firestore'
import { Suspense } from 'react'
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire'
import { App } from './App'
import { FullLoading } from './components/Loading'

export const Root = () => {
    const app = useFirebaseApp()
    const firestore = getFirestore(app)
    const auth = getAuth(app)

    return (
        <Suspense fallback={<FullLoading />}>
            <AuthProvider sdk={auth}>
                <FirestoreProvider sdk={firestore}>
                    <App />
                </FirestoreProvider>
            </AuthProvider>
        </Suspense>
    )
}
