import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirebaseAppProvider } from 'reactfire'
import { Root } from './Root'
import { firebaseConfig } from './firebase/firebaseConfig'

import './styles/global.css'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense>
            <Root />
        </FirebaseAppProvider>
    </React.StrictMode>
)
