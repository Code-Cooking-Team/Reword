import { useAuth, useUser } from 'reactfire'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { FullLoading } from '../../components/Loading'
import { useConfig } from '../../config/useConfig'
import { navHeight } from '../../styles/values'

export const SettingsScreen = () => {
    const auth = useAuth() // Watchout! It's easy to break auth **class** instance
    const { data: user } = useUser()
    const { config, setConfig } = useConfig()

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
                Show keyboard shortcuts:{' '}
                <Button
                    onClick={() => {
                        setConfig({ showKeybindings: !config.showKeybindings })
                    }}
                >
                    {config.showKeybindings ? 'On' : 'Off'}
                </Button>
            </Center>
            <Center>
                <Button type="button" onClick={() => auth.signOut()}>
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
