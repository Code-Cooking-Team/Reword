import React, { useEffect, useState } from 'react'
import KeyHandler, { KEYPRESS } from 'react-key-handler'
import styled from 'styled-components'
import { Icon } from '../../components/Icon'
import { Keyboard } from '../../components/Keyboard'
import { Typewriter } from '../../components/Typewriter'
import { useRouter, useWords } from '../../store'
import { brand, good, white, gray } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { radius } from '../../styles/values'
import { transition } from '../../styles/transitions'

export const Game = () => {
    const { goBack } = useRouter()
    const { words, randomWord } = useWords()
    const [progress, setProgress] = useState(0)
    const [word, setWord] = useState(randomWord())

    // Update when words changes
    useEffect(() => {
        setWord(randomWord())
    }, [words])

    // Generally for development purposes only
    if (!word) return null

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

    const handleRetry = () => {
        setProgress(0)
    }

    return (
        <Container>
            <Row>
                <div>
                    <h1>{word.translation}</h1>
                    <h5>{isComplete ? word.example : '\u00a0'}</h5>
                </div>
            </Row>
            <Row>
                <Typewriter word={word.name} progress={progress} key={word.name} />
            </Row>
            <ActionButtonsWrapper>
                <ActionButton onClick={goBack}>
                    <Icon name="Cross" /> <span>End</span>
                </ActionButton>
                <ActionButton onClick={handleRetry}>
                    <Icon name="Reload" /> <span>Retry</span>
                </ActionButton>
                <ActionButton onClick={handleNextWord}>
                    <Icon name="Play" /> <span>Skip</span>
                </ActionButton>
            </ActionButtonsWrapper>
            <Bottom>
                <Keyboard word={wordRight} onPress={handleKeyPress} />
                {isComplete && (
                    <Complete>
                        <h2>Done!</h2>
                        <DoneButton onClick={handleNextWord}>
                            Next word
                            <Icon name="Play" />
                        </DoneButton>

                        <KeyHandler
                            keyEventName={KEYPRESS}
                            keyValue="Enter"
                            onKeyHandle={handleNextWord}
                        />
                    </Complete>
                )}
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    overflow: hidden;
    user-select: none;
`
const Row = styled.div`
    width: 100%;
    flex: 1 0 auto;
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

const DoneButton = styled.button`
    padding: 30px 50px;
    border: none;
    color: ${white};
    background: ${good};
    border-radius: 4px;
    box-shadow: ${floatingShadow};
    font-weight: bold;
    font-size: 24px;
`

const ActionButtonsWrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-gap: 10px;
`

const ActionButton = styled.button`
    padding: 25px 40px;
    color: ${gray};
    font-size: 1em;
    background: none;
    border: none;
    border-radius: ${radius};
    ${transition('background-color')};

    span {
        vertical-align: middle;
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.1);
    }
`
