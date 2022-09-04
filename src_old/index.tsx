import React from 'react'
import { render } from 'react-dom'
import * as Sentry from '@sentry/browser'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import './styles/global.css'
import { GlobalStateProvider } from './store'
import { ErrorBoundary } from './components/ErrorBoundary'

Sentry.init({
    dsn: 'https://adf49e52f07d479098537009eb0044b0@sentry.io/1446350',
})

render(
    <ErrorBoundary>
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    </ErrorBoundary>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
