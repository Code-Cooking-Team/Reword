import React from 'react'
import styled from 'styled-components'
import { muted, gray, brand } from '../../styles/colors'

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
        />
    </Label>
)

const Label = styled.label`
    position: relative;
    display: block;
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
    border-bottom: 2px solid ${gray};
`
