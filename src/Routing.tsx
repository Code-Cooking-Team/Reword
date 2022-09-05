import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { RouteName } from './RouteName'
import { GameScreen } from './screens/Game'
import { HomeScreen } from './screens/Home'
import { SettingsScreen } from './screens/Settings'
import { WordFormScreen } from './screens/WordForm'
import { WordsScreen } from './screens/Words'

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteName.Home} element={<NavLayout />}>
                    <Route index element={<HomeScreen />} />
                    <Route path={RouteName.Words} element={<WordsScreen />} />
                    <Route path={RouteName.Words} element={<WordsScreen />} />
                    <Route
                        path={`${RouteName.Words}/:wordName`}
                        element={<WordFormScreen />}
                    />
                    <Route path={`${RouteName.NewWord}`} element={<WordFormScreen />} />
                    <Route path={RouteName.Profile} element={<SettingsScreen />} />
                </Route>
                <Route path={RouteName.Game} element={<GameScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavLayout = () => {
    return (
        <>
            <Outlet />
            <NavContainer>
                <Nav />
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
