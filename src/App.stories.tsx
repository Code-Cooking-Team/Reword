import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { App } from './App'
import { GlobalStateProvider } from './store'

storiesOf('App', module).add('default', () => (
    <GlobalStateProvider>
        <App />
    </GlobalStateProvider>
))
