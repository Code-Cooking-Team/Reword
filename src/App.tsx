import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { RouteName } from './RouteName'
import { GameScreen } from './screens/Game'
import { HomeScreen } from './screens/Home'
import { SettingsScreen } from './screens/Settings'
import { WordsScreen } from './screens/Words'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteName.Home} element={<HomeScreen />} />
                <Route path={RouteName.Words} element={<WordsScreen />} />
                <Route path={RouteName.Profile} element={<SettingsScreen />} />
                <Route path={RouteName.Game} element={<GameScreen />} />
            </Routes>
            <NavContainer>
                <Nav />
            </NavContainer>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`

export default App
