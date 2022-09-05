import { useNavigate } from 'react-router-dom'
import KeyHandler, { KEYPRESS } from 'react-key-handler'
import styled from 'styled-components'
import { Icon } from '../../components/Icon'
import { Keyboard } from '../../components/Keyboard'
import { Typewriter } from '../../components/Typewriter'
import { ExampleSentence } from '../../components/Typewriter/ExampleSentence'
import { black1, black6, goodColor, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { transition } from '../../styles/transitions'
import { radius } from '../../styles/values'
import { useGame } from './useGame'

export const GameScreen = () => {
    const navigate = useNavigate()
    const { word, wordRight, progress, nextWord, retry, keyPress, isComplete } = useGame()

    return (
        <Container>
            <Row>
                <div>
                    <h1>{word.translation.join(', ')}</h1>
                    {word.example.map((sentence, index) => (
                        <ExampleSentence
                            key={index}
                            sentence={sentence}
                            hiddenWord={word.name}
                            showWord={isComplete}
                        />
                    ))}
                </div>
            </Row>
            <Row>
                <Typewriter word={word.name} progress={progress} key={word.name} />
            </Row>
            <ActionButtonsWrapper>
                <ActionButton onClick={() => navigate(-1)}>
                    <Icon name="Cross" /> <span>End</span>
                </ActionButton>
                <ActionButton onClick={retry}>
                    <Icon name="Reload" /> <span>Retry</span>
                </ActionButton>
                <ActionButton onClick={nextWord}>
                    <Icon name="Play" /> <span>Skip</span>
                </ActionButton>
            </ActionButtonsWrapper>
            <Bottom>
                <Keyboard word={wordRight} onPress={keyPress} />
                {isComplete && (
                    <Complete>
                        <h2>Done!</h2>
                        <DoneButton onClick={nextWord}>
                            Next word
                            <Icon name="Play" />
                        </DoneButton>
                        <KeyHandler
                            keyEventName={KEYPRESS}
                            keyValue="Enter"
                            onKeyHandle={nextWord}
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
    background: ${goodColor};
    border-radius: 4px;
    box-shadow: ${floatingShadow};
    font-weight: bold;
    font-size: 24px;
`

const ActionButtonsWrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: 10px;
`

const ActionButton = styled.button`
    padding: 25px 40px;
    color: ${black6};
    font-size: 1em;
    background: none;
    border: none;
    border-radius: ${radius};
    ${transition('background-color')};

    span {
        vertical-align: middle;
    }

    &:active {
        background-color: ${black1};
    }
`
