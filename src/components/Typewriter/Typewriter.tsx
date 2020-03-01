import React, { useState } from 'react'
import styled from 'styled-components'
import { useElementSize } from '../../hooks/useElementSize'
import { black, muted, light } from '../../styles/colors'
import { Pointer } from './Pointer'

type TypewriterProps = {
    word: string
    progress: number
}

export const Typewriter = ({ word, progress }: TypewriterProps) => {
    const { width } = useElementSize()
    const [preview, setPreview] = useState(false)

    const typed = word.substr(0, progress)
    const fontSize = Math.min(width / word.length, 80)

    return (
        <Container
            onPointerDown={() => setPreview(true)}
            onPointerOut={() => setPreview(false)}
            style={{ fontSize }}
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
            <Hint>Touch to preview</Hint>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    font-size: 74px;
    font-weight: normal;
    padding: 0;
    overflow: hidden;
    height: 100%;
`

const TypeWrapper = styled.div`
    white-space: nowrap;
    position: relative;
    width: 100%;
`

const Segment = styled.span`
    display: inline-block;
    line-height: 1em;
    height: 1em;
    margin: 0;
    vertical-align: middle;
    position: relative;
`

const Letter = styled.span<{ hide: boolean }>`
    display: inline-block;
    text-align: center;
    position: relative;
    margin: 0 0.025em;
    height: 100%;
    min-width: 0.6em;
    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
    transform: ${props => (props.hide ? 'scale(0.5)' : 'scale(1)')};
    color: ${props => (props.hide ? 'rgba(0,0,0,0.0)' : black)};
    font-family: 'Ubuntu Mono', monospace;

    &::after {
        content: '*';
        position: absolute;
        text-align: center;
        top: 0.8em;
        left: 0;
        right: 0;
        line-height: 0.5em;
        height: 1em;
        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
        color: ${muted};
        transform: ${props => (props.hide ? 'scale(2)' : 'scale(0)')};
        opacity: ${props => (props.hide ? 1 : 0)};
    }
`

const Hint = styled.small`
    font-size: 11px;
    color: ${light};
`
