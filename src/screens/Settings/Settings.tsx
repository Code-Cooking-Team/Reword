import * as React from 'react'
import styled from 'styled-components'
import { useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'

export const Settings = () => {
    const { setRoute } = useRouter()
    return (
        <div>
            <H1>Settings</H1>
            <button onClick={() => setRoute(RouteName.Home)}>Save settings</button>
        </div>
    )
}

const H1 = styled.h1``
