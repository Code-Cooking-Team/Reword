import React from 'react'
import styled, { css } from 'styled-components'
import { brand, white } from '../../styles/colors'
import { fast } from '../../styles/transitions'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

interface KeyProps {
    onClick(): void
    symbol?: string
    visible?: boolean
}

export const Key = (props: KeyProps) => (
    <Container
        visible={props.visible}
        onTouchStart={props.onClick}
        isSpace={props.symbol === ' '}
    >
        {props.symbol}
        <KeyHandler
            keyEventName={KEYPRESS}
            keyValue={props.symbol}
            onKeyHandle={props.onClick}
        />
    </Container>
)

const Container = styled.button<{ visible?: boolean; isSpace?: boolean }>`
    width: ${p => (p.isSpace ? '47vw' : '8vw')};
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
    transition: all ${fast};

    ${p => p.visible && highlight}
`
const highlight = css`
    &:active {
        outline: none;
        background-color: ${brand};
        color: ${white};
    }
`
