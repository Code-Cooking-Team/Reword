import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords } from '../../store'
import { useIsLoading } from '../../store/useIsLoading'
import { StartButton } from './StartButton'

export const Home = () => {
    const isLoading = useIsLoading()
    const { words } = useWords()

    return (
        <Container>
            <Logo />
            <Container>
                <StartButton words={words} loading={isLoading} />
            </Container>
            <WordsCount>
                {!isLoading && (
                    <>
                        You added <b>{words.length}</b> words
                    </>
                )}
            </WordsCount>
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
