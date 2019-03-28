import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords } from '../../store'

export const Home = () => {
    const { words } = useWords()
    return (
        <div>
            <Logo />
            <WordsCount>
                You added <b>{words.length}</b> words
            </WordsCount>
        </div>
    )
}

const WordsCount = styled.div`
    padding: 50px;
    text-align: center;
`
