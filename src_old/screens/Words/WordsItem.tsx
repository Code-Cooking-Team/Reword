import React from 'react'
import styled from 'styled-components'
import { Word } from '../../store/state/types/State'
import { black1, purple, black6 } from '../../styles/colors'
import { Icon } from '../../components/Icon'

type WordsItemProps = {
    word: Word
    removeWord: () => void
}

export const WordsItem = (props: WordsItemProps) => (
    <Container>
        <div>
            <Name>{props.word.name} - </Name>
            <Translations>{props.word.translation.join(', ')}</Translations>

            {props.word.action && 'Loading…'}
            {!!props.word.example.length && (
                <Examples>{props.word.example.join(', ')}</Examples>
            )}
        </div>

        <RemoveButton onClick={props.removeWord}>
            <Icon name="Cross" size="normal" />
        </RemoveButton>
    </Container>
)

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 12px;
    border-bottom: 1px solid ${black1};
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
    font-size: 0.8em;
    font-style: italic;
`

const RemoveButton = styled.button`
    border: none;
    background: none;
`
