import * as React from 'react'
import styled from 'styled-components'
import { white, gray, brand } from '../styles/colors'
import { barShadow } from '../styles/shadow'

type NavProps = {
    active: string
    onChange(page: string): void
}

export const Nav = (prop: NavProps) => {
    return (
        <Container>
            <NavButton
                isActive={prop.active === 'home'}
                onClick={() => prop.onChange('home')}
            >
                Home
            </NavButton>
            <NavButton
                isActive={prop.active === 'words'}
                onClick={() => prop.onChange('words')}
            >
                Words
            </NavButton>
            <NavButton
                isActive={prop.active === 'settings'}
                onClick={() => prop.onChange('settings')}
            >
                Settings
            </NavButton>
        </Container>
    )
}
const Container = styled.div`
    background: ${white};
    display: flex;
    width: 100%;
    min-height: 60px;
    justify-content: space-evenly;
    box-shadow: ${barShadow};
    overflow: hidden;
`

const NavButton = styled.button<{ isActive: boolean }>`
    color: ${props => (props.isActive ? brand : gray)};
    display: block;
    background: none;
    border: none;
    padding: 10px 25px;
    position: relative;
    &::after {
        content: '';
        display: block;
        border-radius: 100%;
        height: 60px;
        width: 60px;
        position: absolute;
        margin: auto;
        top: -50px;
        bottom: -50px;
        left: -50px;
        right: -50px;
        transition: all ${props => (props.isActive ? 0.3 : 0)}s ease;
        opacity: ${props => (props.isActive ? 0 : 0.3)};
        transform: scale(${props => (props.isActive ? 2 : 1)});
        background: ${props => (props.isActive ? brand : 'rgba(255,255,255,0)')};
    }
    &:active::after {
        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;
        opacity: 0.1;
        transform: scale(1.2);
        background: ${brand};
    }
`
