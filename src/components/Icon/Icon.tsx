import React from 'react'
import styled from 'styled-components'
import * as icons from './icons'

const sizes = {
    normal: 24,
    large: 62,
}

export type IconName = keyof typeof icons
export type IconSize = keyof typeof sizes

type IconProps = {
    name: IconName
    size?: IconSize
    block?: boolean
}

export const Icon = ({ name, size = 'normal', block = false }: IconProps) => (
    <Container block={block}>{icons[name](sizes[size])}</Container>
)

const Container = styled.div<{ block: boolean }>`
    display: ${p => (p.block ? 'block' : 'inline-block')};
    vertical-align: middle;
    svg {
        fill: currentColor;
    }
`
