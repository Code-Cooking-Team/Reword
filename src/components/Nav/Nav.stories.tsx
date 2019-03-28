import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import { Nav } from '../Nav'
import styled from 'styled-components'
import { RouteName } from '../../store/types/RouteName'

const options = {
    home: RouteName.Home,
    words: RouteName.Words,
    settings: RouteName.Settings,
}

storiesOf('Nav', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <NavPosition>{story()}</NavPosition>)
    .add('default', () => (
        <Nav
            active={select('active', options, RouteName.Home)}
            onChange={action('onChange')}
        />
    ))
    .add('with state', () => <NavStated />)

export const NavStated = () => {
    const [active, setActive] = useState(RouteName.Home)
    return <Nav active={active} onChange={setActive} />
}

const NavPosition = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
