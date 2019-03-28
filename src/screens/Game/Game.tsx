import React, { useState } from 'react'
import styled from 'styled-components'
import { useWords } from '../../store'
import { Keyboard } from '../../components/Keyboard'
import { NAV_HEIGHT } from '../../components/Nav'

export const Game = () => {
    const { randomWord } = useWords()
    const [progress, setProgress] = useState(0)
    const [word, setWord] = useState(randomWord())

    const wordRight = word.name.substr(progress)

    return (
        <Container>
            <h1>{word.translation}</h1>
            <div>{word.name.substr(0, progress)}</div>
            {progress === word.name.length && (
                <div>
                    <h5>{word.example}</h5>
                    <h2>Done!</h2>
                    <button
                        onClick={() => {
                            setWord(randomWord())
                            setProgress(0)
                        }}
                    >
                        Next word
                    </button>
                </div>
            )}
            <Bottom>
                <Keyboard
                    word={wordRight}
                    onPress={key => {
                        if (key === word.name[progress]) {
                            setProgress(progress + 1)
                        }
                    }}
                />
            </Bottom>
        </Container>
    )
}

const Container = styled.div``

const Bottom = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${NAV_HEIGHT}px;
`
