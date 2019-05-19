import React, { useState } from 'react'
import styled from 'styled-components'
import { muted, gray, brand } from '../../styles/colors'

// const [inputCorrect, inputSetCorrect] = useState(false)
// const [inputFocus, inputSetFocus] = useState(false)

type InputProps = {
    value: string
    type: string
    placeholder: string
    onChange: (value: string) => void
}

export const Input = (props: InputProps) => {
    const [inputState, inputStateSet] = useState({
        focus: false,
        correct: props.value != '',
    })

    return (
        <Label focus={inputState.focus}>
            <LabelName correct={inputState.correct}>{props.placeholder}</LabelName>
            <InputStyled
                type={props.type}
                value={props.value}
                onChange={e => {
                    inputStateSet({ ...inputState, correct: e.target.value != '' })
                    return props.onChange(e.target.value)
                }}
                onFocus={e => inputStateSet({ ...inputState, focus: true })}
                onBlur={e => inputStateSet({ ...inputState, focus: false })}
            />
        </Label>
    )
}

const Label = styled.label<{ focus: boolean }>`
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
        transform: scaleX(${props => (props.focus ? 1 : 0)});
        background: ${brand};
        /* background: ${props => (props.focus ? brand : gray)}; */
    }
`

const LabelName = styled.span<{ correct: boolean }>`
    position: absolute;
    top: 9px;
    left: 0px;
    font-size: 15px;
    transition: transform 0.15s ease-out;
    color: ${muted};
    cursor: text;
    transform-origin: 0 0; //top left dla skali
    transform: ${props =>
        props.correct ? `translateY(-17px) scale(0.8)` : `translate(0px)`};
`

const InputStyled = styled.input`
    padding: 12px 0 9px;
    border: none;
    font-size: 15px;
    display: block;
    width: 100%;
    margin: 15px 0;
    border-bottom: 2px solid ${muted};
    /* &:focus {
        border-bottom-color: ${brand};
    } */
`
