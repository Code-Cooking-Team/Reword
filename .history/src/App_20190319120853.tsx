import * as React from 'react'
import { Home } from './screens/Home'
import { Words } from './screens/Words'
import { Nav } from './components/Nav'

const screens = {
    home: Home,
    words: Words,
}

export const App = () => {
    const [active, setActive] = React.useState('words')
    const Page = screens[active]

    return (
        <div>
            <Page />
            <Nav active={active} onChange={setActive} />
        </div>
    )
}
