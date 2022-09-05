import styled, { css } from 'styled-components'
import { purple, white } from '../../styles/colors'
import { fast } from '../../styles/transitions'
import { useKeyPressEvent } from 'react-use'

interface KeyProps {
    onPress(): void
    symbol: string
    visible?: boolean
}

export const Key = ({ visible, onPress, symbol }: KeyProps) => {
    useKeyPressEvent((event) => event.key === symbol, onPress)

    return (
        <Container visible={visible} onPointerDown={onPress} isSpace={symbol === ' '}>
            {symbol}
        </Container>
    )
}

const Container = styled.button<{ visible?: boolean; isSpace?: boolean }>`
    width: ${(p) => (p.isSpace ? '47vw' : '8vw')};
    height: 7vh;
    padding: 0;
    margin: 0 4px;
    border: 0.4pt solid ${purple};
    opacity: ${(p) => (p.visible ? 1 : 0.1)};
    border-radius: 4px;
    color: ${purple};
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    background: none;
    transition: all ${fast};

    ${(p) => p.visible && highlight}
`
const highlight = css`
    &:active {
        outline: none;
        background-color: ${purple};
        color: ${white};
    }
`
