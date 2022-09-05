import styled from 'styled-components'
import { white } from '../../styles/colors'
import { barShadow } from '../../styles/shadow'
import { getKeysForWord } from './getKeysForWord'
import { Key } from './Key'

interface KeyboardProps {
    word: string
    onPress(key: string): void
    fakeKeys?: number
}

export const Keyboard = (props: KeyboardProps) => (
    <Container>
        {getKeysForWord(props.word, props.fakeKeys).map((row, index) => (
            <Row key={index}>
                {row.map((key) => (
                    <Key
                        key={key.key}
                        symbol={key.key}
                        visible={key.visible}
                        onPress={() => {
                            if (key.visible) {
                                props.onPress(key.key)
                            }
                        }}
                    />
                ))}
            </Row>
        ))}
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

export const vibrateOk = () => navigator.vibrate(1)
export const vibrateBad = () => navigator.vibrate([1, 100, 1, 100, 1])
