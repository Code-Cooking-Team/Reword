import React from 'react'
import styled from 'styled-components'
import { IconName, Icon } from '../Icon'
import { brand, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'

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
    padding: 12px;
    border: 2px solid ${white};
    color: ${brand};
    box-shadow: ${floatingShadow};
    border-radius: 50%;
    background: ${white};
    &:active {
        border-color: ${brand};
    }
`
