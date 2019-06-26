import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import KeyHandler, { KEYPRESS } from 'react-key-handler'
import { Keyboard } from '../../components/Keyboard'
import { Typewriter } from '../../components/Typewriter'
import { useWords, useRouter } from '../../store'
import { Icon } from '../../components/Icon'
import { good, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import ScaleText from 'react-scale-text'

export const Game = () => {
    const { goBack } = useRouter()
    const { words, randomWord } = useWords()
    const [progress, setProgress] = useState(0)
    const [word, setWord] = useState(randomWord())

    // Update when words changes
    useEffect(() => {
        setWord(randomWord())
    }, [randomWord, words])

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

    return (
        <Container>
            <Row>
                <ScaleText maxFontSize={24}>
                    <div>
                        <h1>{word.translation}</h1>
                        <h5>{isComplete ? word.example : '\u00a0'}</h5>
                    </div>
                </ScaleText>
            </Row>
            <Row>
                <Typewriter word={word.name} progress={progress} key={word.name} />
                <button onClick={goBack}>Cancel</button>
            </Row>
            <Bottom>
                <Keyboard word={wordRight} onPress={handleKeyPress} />
                {isComplete && (
                    <Complete>
                        <h2>Done!</h2>
                        <Button onClick={handleNextWord}>
                            Next word
                            <Icon name="play" />
                        </Button>

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
    /* display: grid; */
    /* grid-template-rows: 1fr 2fr auto; */
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    overflow: hidden;
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
