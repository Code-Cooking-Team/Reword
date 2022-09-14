import { ReactNode } from 'react'
import styled from 'styled-components'
import { useConfig } from '../../config/useConfig'
import { isMobile } from '../../styles/mediaQuery'

type KbdProps = {
    light?: boolean
    block?: boolean
    children?: ReactNode
}

export const Kbd = (props: KbdProps) => {
    const { config } = useConfig()
    if (!config.showKeybindings) return null
    return <Container {...props} />
}

const color = ({ light }: KbdProps) => (light ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.2)')

export const Container = styled.kbd<KbdProps>`
    display: ${({ block }) => (block ? 'block' : 'inline-block')};
    vertical-align: middle;
    padding: 2px 4px;
    font-size: 11px;
    color: ${color};
    border-radius: 3px;
    line-height: 1.2;
    border: 1px solid ${color};

    ${isMobile} {
        display: none;
    }
`
