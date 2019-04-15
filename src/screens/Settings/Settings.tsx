import * as React from 'react'
import styled from 'styled-components'
import { useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'
import { Header } from '../../components/Header'

export const Settings = () => {
    const { setRoute } = useRouter()
    return (
        <div>
            <Header title="Settings" iconName="profile" />
            <button onClick={() => setRoute(RouteName.Home)}>Save settings</button>
        </div>
    )
}
