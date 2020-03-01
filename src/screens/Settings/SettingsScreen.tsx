import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { FullLoading } from '../../components/Loading'
import { useGlobalState } from '../../store/state/store'
import { useAuthActions } from '../../store/useAuth'
import { navHeight } from '../../styles/values'

export const SettingsScreen = () => {
    const { signOut } = useAuthActions()
    const [user] = useGlobalState('user')

    if (!user) {
        return <FullLoading />
    }

    return (
        <Container>
            <Header title="Profile" iconName="Profile" />
            <Center>
                Logged as <strong>{user.email}</strong>
            </Center>
            <Center>
                <Button type="button" onClick={() => signOut()}>
                    Sign out
                </Button>
            </Center>
        </Container>
    )
}

const Container = styled.div`
    padding-bottom: ${navHeight};
`

const Center = styled.div`
    text-align: center;
    padding: 20px;
`
