import { storiesOf } from '@storybook/react'
import React from 'react'
import { App } from './App'
import { GlobalStateProvider } from './store'

storiesOf('App', module).add('default', () => (
    <GlobalStateProvider>
        <App />
    </GlobalStateProvider>
))
