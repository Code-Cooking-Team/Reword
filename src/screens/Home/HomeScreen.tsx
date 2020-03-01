import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords } from '../../store'
import { useIsLoading } from '../../store/useIsLoading'
import { StartButton } from './StartButton'
import { FullLoading } from '../../components/Loading'
import { AuthForm } from './AuthForm'
import { white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'

export const HomeScreen = () => {
    const { isLoading, loggedIn } = useIsLoading()
    const { words } = useWords()

    if (isLoading) {
        return <FullLoading />
    }

    return (
        <Container>
            <Logo />
            {loggedIn ? (
                <>
                    <Container>
                        <StartButton words={words} />
                    </Container>
                    <WordsCount>
                        You added <b>{words.length}</b> words
                    </WordsCount>
                </>
            ) : (
                <AuthFormWrapper>
                    <AuthForm />
                </AuthFormWrapper>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-auto-rows: 1fr 3fr 1fr;
    align-items: center;
    justify-items: center;
`

const WordsCount = styled.div`
    padding: 25px;
    text-align: center;
`

const AuthFormWrapper = styled.main`
    background: ${white};
    box-shadow: ${floatingShadow};
    border-radius: 5px;
    width: 100%;
    max-width: 360px;
    overflow: hidden;
`
