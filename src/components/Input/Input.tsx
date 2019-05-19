import React, { useState } from 'react'
import styled from 'styled-components'
import { muted, gray, brand } from '../../styles/colors'

// const [inputFocus, inputSetFocus] = useState(false)
// const [inputCorrect, inputSetCorrect] = useState(false)

type InputProps = {
    value: string
    type: string
    placeholder: string
    onChange: (value: string) => void
}

export const Input = (props: InputProps) => (
    <Label>
        <LabelName>{props.placeholder}</LabelName>
        <InputStyled
            type={props.type}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            // onFocus={e => inputSetFocus(true)}
            // onBlur={e => inputSetFocus(false)}
        />
    </Label>
)

const Label = styled.label`
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
    }
`

const LabelName = styled.span`
    position: absolute;
    top: 10px;
    left: 25px;
    color: ${muted};
`
const InputStyled = styled.input`
    padding: 12px 25px;
    border: none;
    display: block;
    width: 100%;
    margin: 10px 0;
    transition: border 0.2s ease-out;
    border-bottom: 2px solid ${gray};
    &:focus {
        border-bottom-color: ${brand};
    }
`
