import React from 'react'
import styled from 'styled-components'
import { getKeysForWord } from './getKeysForWord'

interface KeyboardProps {
    word: string
    onPress(key: string): void
    fakeKeys?: number
}

export const Keyboard = (props: KeyboardProps) => (
    <Container>
        {getKeysForWord(props.word, props.fakeKeys).map((row, i) => (
            <Row key={i}>
                {row.map(k => (
                    <Key
                        key={k.key}
                        visible={k.visible}
                        onClick={() => {
                            if (k.visible) props.onPress(k.key)
                        }}
                    >
                        {k.key}
                    </Key>
                ))}
            </Row>
        ))}
    </Container>
)

const Container = styled.div`
    background: #fff;
`

const Row = styled.div`
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    padding: 5px;
`

const Key = styled.button<{ visible: boolean }>`
    border: 2px solid purple;
    background: none;
    opacity: ${p => (p.visible ? 1 : 0.1)};
    padding: 20px 0;
    margin: 0 4px;
    border-radius: 4px;
    color: purple;
    width: 50px;
    font-size: 16px;
    text-align: center;
`
