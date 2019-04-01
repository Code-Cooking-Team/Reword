import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords } from '../../store'
import { useGlobalState } from '../../store/state/store'
import { StartButton } from './StartButton'

export const Home = () => {
    const [loading] = useGlobalState('loading')
    const { words } = useWords()

    return (
        <Container>
            <Logo />
            <Container>
                <StartButton words={words} loading={loading} />
            </Container>
            <WordsCount>
                {!loading && (
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
