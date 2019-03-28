import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords, useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'

export const Home = () => {
    const { setRoute } = useRouter()
    const { words } = useWords()
    return (
        <div>
            <Logo />
            <button onClick={() => setRoute(RouteName.Game)}>Play</button>
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
