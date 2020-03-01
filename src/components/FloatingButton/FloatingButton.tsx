import React from 'react'
import styled from 'styled-components'
import { IconName, Icon } from '../Icon'
import { brandColor, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { NAV_HEIGHT } from '../Nav'

type FloatingButtonProps = {
    onClick: () => void
    iconName: IconName
}

export const FloatingButton = (props: FloatingButtonProps) => (
    <Button onClick={props.onClick}>
        <Icon name={props.iconName} size="big" />
    </Button>
)

const Button = styled.button`
    position: relative;
    display: block;
    padding: 13px;
    border: 2px solid ${white};
    color: ${brandColor};
    box-shadow: ${floatingShadow};
    border-radius: 50%;
    background: ${white};
    transition: 0.2s;
    margin: 15px 15px 17px auto;
    position: sticky;
    bottom: 17px;
    &:active {
        border-color: ${brandColor};
    }
`
