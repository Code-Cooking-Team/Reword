import React from 'react'
import styled from 'styled-components'
import { brand, white } from '../../styles/colors'

interface KeyProps {
    onClick(): void
    symbol?: string
    visible?: boolean
    className?: string
}

export const Key = (props: KeyProps) => (
    <Container
        visible={props.visible}
        onClick={props.onClick}
        className={props.className}
    >
        {props.symbol}
    </Container>
)

const Container = styled.button<{ visible?: boolean }>`
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
