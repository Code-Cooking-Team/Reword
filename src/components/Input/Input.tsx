import React, { useState } from 'react'
import styled from 'styled-components'
import { brand, muted } from '../../styles/colors'

type InputProps = {
    value: string
    type?: string
    name?: string
    placeholder: string
    onChange: (value: string) => void
    autoFocus?: boolean
}

export const Input = (props: InputProps) => {
    const { value, type = 'text', placeholder, onChange, autoFocus, name } = props

    const [focus, setFocus] = useState(false)

    return (
        <Label active={focus}>
            <LabelName move={value !== ''}>{placeholder}</LabelName>
            <InputStyled
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                autoFocus={autoFocus}
                name={name}
            />
        </Label>
    )
}

const Label = styled.label<{ active: boolean }>`
    position: relative;
    display: block;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        opacity: 1;
        transition: transform 0.25s ease-out;
        transform: scaleX(${props => (props.active ? 1 : 0)});
        background: ${brand};
    }
`

const LabelName = styled.span<{ move: boolean }>`
    position: absolute;
    top: 9px;
    left: 0px;
    font-size: 15px;
    transition: transform 0.15s ease-out;
    color: ${muted};
    cursor: text;
    transform-origin: 0 0; // top left for scale
    transform: ${props =>
        props.move ? `translateY(-17px) scale(0.8)` : `translate(0px)`};
`

const InputStyled = styled.input`
    padding: 12px 0 9px;
    border: none;
    font-size: 15px;
    display: block;
    width: 100%;
    margin: 15px 0;
    border-bottom: 2px solid ${muted};
`
