import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IconName, Icon } from '../Icon'
import { grayBg } from '../../styles/colors'

type HeaderProps = {
    title: string
    iconName: IconName
    children?: ReactNode
}

export const Header = (props: HeaderProps) => {
    return (
        <HeaderWrapper>
            <Icon name={props.iconName} size="large" />
            <h1>{props.title}</h1>
            {props.children}
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background: ${grayBg};
    display: flex;
    min-height: 260px;
    padding: 15px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`
