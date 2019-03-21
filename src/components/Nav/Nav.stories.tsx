import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { Nav } from '../Nav'
import styled from 'styled-components'

const options = {
    home: 'home',
    words: 'words',
    settings: 'settings',
}

storiesOf('Nav', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <NavPosition>{story()}</NavPosition>)
    .add('default', () => (
        <Nav active={select('active', options, 'home')} onChange={action('onChange')} />
    ))
    .add('with state', () => <NavStated />)

export const NavStated = () => {
    const [active, setActive] = useState('home')
    return <Nav active={active} onChange={setActive} />
}

const NavPosition = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
