import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Logo } from './Logo'

storiesOf('Logo', module)
    .addDecorator(withKnobs)
    .add('default', () => <Logo />)
