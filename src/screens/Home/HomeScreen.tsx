import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords } from '../../firebase/firestore/useWords'
import { fadeInAnimation } from '../../styles/animations'
import { navHeight } from '../../styles/values'
import { StartButton } from './StartButton'

export const HomeScreen = () => {
    const { words } = useWords()

    return (
        <Container>
            <Logo />
            <>
                <Container>
                    <StartButton hasWords={words.length > 0} />
                </Container>
                <WordsCount>
                    You added <b>{words.length}</b> words
                </WordsCount>
            </>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-auto-rows: 1fr 3fr 1fr;
    align-items: center;
    justify-items: center;
    padding-bottom: ${navHeight};
`

const WordsCount = styled.div`
    padding: 25px;
    text-align: center;
    ${fadeInAnimation}
`
