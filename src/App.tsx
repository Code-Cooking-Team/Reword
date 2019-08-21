import React, { ElementType } from 'react'
import styled from 'styled-components'
import { Nav, NAV_HEIGHT } from './components/Nav'
import { Game } from './screens/Game'
import { Home } from './screens/Home'
import { Settings } from './screens/Settings'
import { Words } from './screens/Words'
import { useRouter, useWordsPersist } from './store'
import { RouteName } from './store/types/RouteName'
import { useWatchAuthChange } from './store/useAuth'

const screens: Record<RouteName, ElementType> = {
    [RouteName.Home]: Home,
    [RouteName.Words]: Words,
    [RouteName.Profile]: Settings,
    [RouteName.Game]: Game,
}

export const App = () => {
    useWordsPersist()
    useWatchAuthChange()

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
    height: calc(100% - ${NAV_HEIGHT}px);
    position: relative;
    width: 100%;
    overflow-y: auto;
`

const NavContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
