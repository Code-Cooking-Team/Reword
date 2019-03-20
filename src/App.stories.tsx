import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { App } from './App'

storiesOf('App', module)
    .addDecorator(withKnobs)
    .add('default', () => <App />)
