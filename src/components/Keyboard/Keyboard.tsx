import React from 'react'
import styled from 'styled-components'
import { getKeysForWord } from './getKeysForWord'
import { brand, white } from '../../styles/colors'
import { barShadow } from '../../styles/shadow'

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
        <Row>
            <Space onClick={() => props.onPress(' ')} visible />
        </Row>
    </Container>
)

const Container = styled.div`
    background: #fff;
    padding: 0 0 50px;
    box-shadow: ${barShadow};
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 5px 0;
`

const Key = styled.button<{ visible?: boolean }>`
    width: 8vw;
    height: 7vh;
    padding: 0;
    margin: 0 4px;
    border: 2px solid ${brand};
    opacity: ${p => (p.visible ? 1 : 0.1)};
    border-radius: 4px;
    color: ${brand};
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    background: none;
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        background-color: ${brand};
        color: ${white};
    }
`

const Space = styled(Key)`
    width: 50vw;
`
