import * as React from 'react'
import styled, { css } from 'styled-components'
import { white, black6, purple } from '../../styles/colors'
import { barShadow } from '../../styles/shadow'
import { Icon } from '../Icon'
import { fast } from '../../styles/transitions'
import { RouteName } from '../../store/types/RouteName'
import { useIsLoading } from '../../store/useIsLoading'
import { Space } from '../Space/Space'

export const NAV_HEIGHT = 60

type NavProps = {
    active: RouteName
    onChange(page: RouteName): void
}

export const Nav = (prop: NavProps) => {
    const { loggedIn } = useIsLoading()

    return (
        <Container show={loggedIn}>
            <Space>
                <NavList>
                    <NavButton
                        isActive={prop.active === RouteName.Home}
                        onClick={() => prop.onChange(RouteName.Home)}
                    >
                        <Icon name="Home" block />
                        Home
                    </NavButton>
                    <NavButton
                        isActive={prop.active === RouteName.Words}
                        onClick={() => prop.onChange(RouteName.Words)}
                    >
                        <Icon name="Words" block />
                        Words
                    </NavButton>
                    <NavButton
                        isActive={prop.active === RouteName.Profile}
                        onClick={() => prop.onChange(RouteName.Profile)}
                    >
                        <Icon name="Profile" block />
                        Profile
                    </NavButton>
                </NavList>
            </Space>
        </Container>
    )
}

const Container = styled.nav<{ show: boolean }>`
    background: ${white};
    width: 100%;
    min-height: ${NAV_HEIGHT}px;
    box-shadow: ${barShadow};
    overflow: hidden;
    transform: translateY(${p => (p.show ? 0 : NAV_HEIGHT)}px);
    transition: transform 300ms ease;
`
const NavList = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const NavButton = styled.button<{ isActive: boolean }>`
    color: ${props => (props.isActive ? purple : black6)};
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
        background: ${purple};
    }
`

const activeCSS = css`
    transition: all ${fast};
    opacity: 0;
    transform: scale(2);
    background: ${purple};
`

const inActiveCSS = css`
    transition: all 0 ease;
    opacity: 0.3;
    transform: scale(1);
    background: rgba(255, 255, 255, 0);
`
