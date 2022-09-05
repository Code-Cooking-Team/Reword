import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './firebase/firebaseConfig'
import { Root } from './Root'

import './styles/global.css'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
    <StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense>
            <Root />
        </FirebaseAppProvider>
    </StrictMode>
)
