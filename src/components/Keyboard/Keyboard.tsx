import React from 'react'
import styled from 'styled-components'
import { getKeysForWord } from './getKeysForWord'
import { white } from '../../styles/colors'
import { barShadow } from '../../styles/shadow'
import { Key } from './Key'

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
                        symbol={k.key}
                        visible={k.visible}
                        onClick={() => {
                            if (k.visible) props.onPress(k.key)
                        }}
                    />
                ))}
            </Row>
        ))}
        <Row>
            <Space onClick={() => props.onPress(' ')} visible />
        </Row>
    </Container>
)

const Container = styled.div`
    padding: 0 0 50px;
    background: ${white};
    box-shadow: ${barShadow};
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 5px 0;
`

const Space = styled(Key)`
    width: 50vw;
`
