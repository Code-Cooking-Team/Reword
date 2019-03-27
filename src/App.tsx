import * as React from 'react'
import { Home } from './screens/Home'
import { Words } from './screens/Words'
import { Nav } from './components/Nav'
import { Settings } from './screens/Settings'
import styled from 'styled-components'

const screens = {
    home: Home,
    words: Words,
    settings: Settings,
}

export const App = () => {
    const [active, setActive] = React.useState('home')
    const Page = screens[active]

    return (
        <div>
            <Page />
            <NavPosition>
                <Nav active={active} onChange={setActive} />
            </NavPosition>
        </div>
    )
}

const NavPosition = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
