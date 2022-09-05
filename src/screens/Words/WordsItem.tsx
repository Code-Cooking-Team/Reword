import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from '../../components/Icon'
import { Word } from '../../firebase/types/Word'
import { black1, black6, purple } from '../../styles/colors'

type WordsItemProps = {
    word: Word
    removeWord: () => void
}

export const WordsItem = ({ word, removeWord }: WordsItemProps) => {
    return (
        <Container>
            <WordLink to={word.name}>
                <Name>{word.name} - </Name>
                <Translations>{word.translation.join(', ')}</Translations>

                {!!word.example.length && <Examples>{word.example.join(', ')}</Examples>}
            </WordLink>

            <RemoveButton onClick={removeWord}>
                <Icon name="Cross" size="normal" />
            </RemoveButton>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 12px;
    border-bottom: 1px solid ${black1};
`

const WordLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`

const Name = styled.strong`
    font-weight: normal;
    font-size: 1.2em;
`

const Translations = styled.span`
    color: ${purple};
    font-size: 1.2em;
`

const Examples = styled.div`
    color: ${black6};
    font-size: 0.7em;
    font-style: italic;
    line-height: 1.2;
    padding-top: 4px;
`

const RemoveButton = styled.button`
    border: none;
    background: none;
`
