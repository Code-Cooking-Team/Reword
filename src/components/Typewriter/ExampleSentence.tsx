import React from 'react'
import styled from 'styled-components'
import { brandColor } from '../../styles/colors'

type ExampleSentenceProps = {
    sentence: string
    hiddenWord: string
    showWord?: boolean
}

export const ExampleSentence = ({
    sentence,
    hiddenWord,
    showWord,
}: ExampleSentenceProps) => {
    const words = splitWords(sentence).map(word => ({
        word,
        isHidden: matchWord(word, hiddenWord),
    }))

    return (
        <Container>
            {words.map(({ word, isHidden }, index) => (
                <span key={word + index}>
                    {isHidden ? (
                        <HiddenWord>
                            {showWord ? word : '*'.repeat(word.length)}
                        </HiddenWord>
                    ) : (
                        <span>{word}</span>
                    )}
                    {index !== words.length - 1 && ' '}
                </span>
            ))}
        </Container>
    )
}

const splitWords = (sentence: string) => sentence.split(/\s+/)

const matchWord = (word: string, hiddenWord: string) => {
    const lowerWord = word.toLocaleLowerCase()
    const lowerHiddenWord = hiddenWord.toLocaleLowerCase().slice(0, -1)
    return lowerWord.startsWith(lowerHiddenWord)
}

const Container = styled.p`
    &:before {
        content: '“';
    }
    &:after {
        content: '”';
    }
`

const HiddenWord = styled.span`
    color: ${brandColor};
`
