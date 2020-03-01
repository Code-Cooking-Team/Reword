import React, { ElementType } from 'react'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { GameScreen } from './screens/Game'
import { HomeScreen } from './screens/Home'
import { SettingsScreen } from './screens/Settings'
import { useRouter, useWordsPersist } from './store'
import { RouteName } from './store/types/RouteName'
import { useWatchAuthChange } from './store/useAuth'
import { WordsScreen } from './screens/Words'

const screens: Record<RouteName, ElementType> = {
    [RouteName.Home]: HomeScreen,
    [RouteName.Words]: WordsScreen,
    [RouteName.Profile]: SettingsScreen,
    [RouteName.Game]: GameScreen,
}

export const App = () => {
    useWordsPersist()
    useWatchAuthChange()

    const { route, setRoute } = useRouter()
    const Page = screens[route]

    return (
        <>
            <Page />
            <NavContainer>
                <Nav active={route} onChange={setRoute} />
            </NavContainer>
        </>
    )
}

const NavContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
