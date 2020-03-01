import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { useAuthActions } from '../../store/useAuth'
import styled from 'styled-components'
import { useGlobalState } from '../../store/state/store'

export const SettingsScreen = () => {
    const { signOut } = useAuthActions()
    const [user] = useGlobalState('user')

    return (
        <div>
            <Header title="Profile" iconName="Profile" />
            <Center>
                Logged as <strong>{user.email}</strong>
            </Center>
            <Center>
                <Button type="button" onClick={() => signOut()}>
                    Sign out
                </Button>
            </Center>
        </div>
    )
}

const Center = styled.div`
    text-align: center;
    padding: 20px;
`
