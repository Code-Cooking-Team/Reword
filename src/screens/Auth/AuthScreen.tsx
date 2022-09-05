import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { AuthForm } from './AuthForm'

export const AuthScreen = () => {
    return (
        <Container>
            <Logo />
            <AuthFormWrapper>
                <AuthForm />
            </AuthFormWrapper>
        </Container>
    )
}

const AuthFormWrapper = styled.main`
    background: ${white};
    box-shadow: ${floatingShadow};
    border-radius: 5px;
    width: 100%;
    max-width: 360px;
    overflow: hidden;
`

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-auto-rows: 1fr 3fr;
    align-items: center;
    justify-items: center;
`
