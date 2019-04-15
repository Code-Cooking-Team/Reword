import React from 'react'
import styled from 'styled-components'
import { IconName, Icon } from '../Icon'

type FloatingButtonProps = {
    onClick: () => void
    iconName: IconName
}

export const FloatingButton = (props: FloatingButtonProps) => (
    <Button onClick={props.onClick}>
        <Icon name={props.iconName} size="normal" />
    </Button>
)

const Button = styled.button`
    position: fixed;
    bottom: 100px;
    right: 10px;
`
