import * as React from 'react'
import styled, { css } from 'styled-components'
import { white, gray, brand } from '../../styles/colors'
import { barShadow } from '../../styles/shadow'
import { Icon } from '../Icon'
import { fast } from '../../styles/transitions'
import { RouteName } from '../../store/types/RouteName'
import { useIsLoading } from '../../store/useIsLoading'

export const NAV_HEIGHT = 60

type NavProps = {
    active: RouteName
    onChange(page: RouteName): void
}

export const Nav = (prop: NavProps) => {
    const { loggedIn } = useIsLoading()

    return (
        <Container show={loggedIn}>
            <NavButton
                isActive={prop.active === RouteName.Home}
                onClick={() => prop.onChange(RouteName.Home)}
            >
                <Icon name="home" block />
                Home
            </NavButton>
            <NavButton
                isActive={prop.active === RouteName.Words}
                onClick={() => prop.onChange(RouteName.Words)}
            >
                <Icon name="words" block />
                Words
            </NavButton>
            <NavButton
                isActive={prop.active === RouteName.Profile}
                onClick={() => prop.onChange(RouteName.Profile)}
            >
                <Icon name="profile" block />
                Profile
            </NavButton>
        </Container>
    )
}

const Container = styled.nav<{ show: boolean }>`
    background: ${white};
    display: flex;
    width: 100%;
    min-height: ${NAV_HEIGHT}px;
    justify-content: space-evenly;
    box-shadow: ${barShadow};
    overflow: hidden;
    transform: translateY(${p => (p.show ? 0 : NAV_HEIGHT)}px);
    transition: transform 300ms ease;
`

const NavButton = styled.button<{ isActive: boolean }>`
    color: ${props => (props.isActive ? brand : gray)};
    display: block;
    background: none;
    border: none;
    padding: 10px 25px;
    position: relative;
    line-height: 1.5em;
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
        ${props => (props.isActive ? activeCSS : inActiveCSS)};
    }
    &:active::after {
        transition: opacity 0.6s ease-out, background 0.6s ease-out, transform 1s ease-out;
        opacity: 0.1;
        transform: scale(1.2);
        background: ${brand};
    }
`

const activeCSS = css`
    transition: all ${fast};
    opacity: 0;
    transform: scale(2);
    background: ${brand};
`

const inActiveCSS = css`
    transition: all 0 ease;
    opacity: 0.3;
    transform: scale(1);
    background: rgba(255, 255, 255, 0);
`
