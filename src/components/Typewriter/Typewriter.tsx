import React, { useState } from 'react'
import styled from 'styled-components'
import { muted, black } from '../../styles/colors'
import { Pointer } from './Pointer'

type TypewriterProps = {
    word: string
    progress: number
}

export const Typewriter = (props: TypewriterProps) => {
    const { word, progress } = props
    const typed = word.substr(0, progress)
    const [preview, setPreview] = useState(false)

    return (
        <Container
            onPointerDown={() => setPreview(true)}
            onPointerOut={() => setPreview(false)}
        >
            <TypeWrapper>
                {word.split('').map((w, i) => {
                    return (
                        <Segment key={w + i}>
                            {i === progress && <Pointer key={typed} />}
                            <Letter hide={progress <= i && !preview}>{w}</Letter>
                        </Segment>
                    )
                })}
            </TypeWrapper>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    font-size: 74px;
    font-weight: normal;
    padding: 0px 25px;
    overflow: hidden;
    height: 2em;
    width: 100%;
    line-height: 2em;
`

const TypeWrapper = styled.div`
    white-space: nowrap;
    position: relative;
    width: 100%;
`

const Segment = styled.span`
    display: inline-block;
    line-height: 1em;
    height: 90px;
    margin: 0 1px;
    vertical-align: middle;
    position: relative;
`

const Letter = styled.span<{ hide: boolean }>`
    display: inline-block;
    text-align: center;
    position: relative;
    margin: 0 0.025em;
    height: 100%;
    min-width: 25px;
    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
    transform: ${props => (props.hide ? 'scale(0.5)' : 'scale(1)')};
    color: ${props => (props.hide ? 'rgba(255,255,255,0)' : black)};
    font-family: 'Ubuntu Mono', monospace;

    &::after {
        content: '*';
        position: absolute;
        text-align: center;
        top: 0.5em;
        left: 0;
        right: 0;
        line-height: 0.5em;
        height: 20px;
        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
        color: ${muted};
        transform: ${props => (props.hide ? 'scale(2)' : 'scale(0)')};
        opacity: ${props => (props.hide ? 1 : 0)};
    }
`
