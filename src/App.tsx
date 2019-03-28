import React, { ElementType } from 'react'
import styled from 'styled-components'
import { Nav, NAV_HEIGHT } from './components/Nav'
import { Home } from './screens/Home'
import { Settings } from './screens/Settings'
import { Words } from './screens/Words'
import { useRouter } from './store'
import { RouteName } from './store/types/RouteName'

const screens: Record<RouteName, ElementType> = {
    [RouteName.Home]: Home,
    [RouteName.Words]: Words,
    [RouteName.Settings]: Settings,
}

export const App = () => {
    const { route, setRoute } = useRouter()
    const Page = screens[route]

    return (
        <>
            <Content>
                <Page />
            </Content>
            <NavContainer>
                <Nav active={route} onChange={setRoute} />
            </NavContainer>
        </>
    )
}

const Content = styled.main`
    padding-bottom: ${NAV_HEIGHT}px;
`

const NavContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
