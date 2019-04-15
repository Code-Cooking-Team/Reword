import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IconName, Icon } from '../Icon'

type HeaderProps = {
    title: string
    iconName: IconName
    children?: ReactNode
}

export const Header = (props: HeaderProps) => {
    return (
        <header>
            <Icon name={props.iconName} size="large" />
            <h1>{props.title}</h1>
            {props.children}
        </header>
    )
}
