import React from 'react'
import styled from 'styled-components'
import { IconName, Icon } from '../Icon'
import { brand, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { NAV_HEIGHT } from '../Nav'

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
    bottom: ${NAV_HEIGHT + 15}px;
    right: 15px;
    padding: 12px;
    border: 2px solid ${white};
    color: ${brand};
    box-shadow: ${floatingShadow};
    border-radius: 50%;
    background: ${white};
    transition: 0.2s;
    &:active {
        border-color: ${brand};
    }
`
