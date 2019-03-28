import React, { useState } from 'react'
import styled from 'styled-components'
import { Keyboard } from '../../components/Keyboard'
import { Typewriter } from '../../components/Typewriter'
import { useWords } from '../../store'
import { Word } from '../../store/state/types/State'
import { Icon } from '../../components/Icon'
import { good, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'

export const Game = () => {
    const { randomWord } = useWords()
    const [progress, setProgress] = useState(0)
    const [word, setWord] = useState(randomWord())

    const wordRight = word.name.substr(progress)
    const isComplete = progress === word.name.length

    const handleKeyPress = (key: string) => {
        const currentWord = word.name[progress].toLocaleLowerCase()
        if (key === currentWord) {
            setProgress(progress + 1)
        }
    }

    const handleNextWord = () => {
        setWord(randomWord())
        setProgress(0)
    }

    return (
        <Container>
            <div>
                <h1>{word.translation}</h1>
                <h5>{isComplete ? word.example : '\u00a0'}</h5>
            </div>
            <div>
                <Typewriter word={word.name} progress={progress} />
            </div>
            <Bottom>
                <Keyboard word={wordRight} onPress={handleKeyPress} />
                {isComplete && (
                    <Complete>
                        <h2>Done!</h2>
                        <Button onClick={handleNextWord}>
                            Next word
                            <Icon name="play" />
                        </Button>
                    </Complete>
                )}
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 2fr auto;
    align-items: center;
    justify-items: center;
    text-align: center;
    overflow: hidden;
`

const Bottom = styled.div`
    width: 100%;
    position: relative;
`

const Complete = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    padding: 30px 50px;
    border: none;
    color: ${white};
    background: ${good};
    border-radius: 4px;
    box-shadow: ${floatingShadow};
    font-weight: bold;
    font-size: 24px;
`
