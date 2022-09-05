import { useState } from 'react'
import styled from 'styled-components'
import { useKeyPress } from 'react-use'
import { useElementSize } from '../../hooks/useElementSize'
import { black, black1, black3 } from '../../styles/colors'
import { Pointer } from './Pointer'
import { Kbd } from '../Button/Kbd'

type TypewriterProps = {
    word: string
    progress: number
}

export const Typewriter = ({ word, progress }: TypewriterProps) => {
    const { width } = useElementSize()
    const [preview, setPreview] = useState(false)
    const [isPrevButton] = useKeyPress('Shift')

    const showPreview = isPrevButton || preview
    const previewIndex = showPreview ? progress + 2 : 0

    const typed = word.substring(0, progress)
    const fontSize = Math.min(width / word.length, 80)

    return (
        <Container
            onPointerDown={() => setPreview(true)}
            onPointerUp={() => setPreview(false)}
            onPointerCancel={() => setPreview(false)}
            style={{ fontSize }}
        >
            <TypeWrapper>
                {word.split('').map((letter, index) => {
                    return (
                        <Segment key={letter + index}>
                            {index === progress && <Pointer key={typed} />}
                            <Letter
                                show={progress > index}
                                preview={previewIndex > index}
                            >
                                {letter}
                            </Letter>
                        </Segment>
                    )
                })}
            </TypeWrapper>
            <Hint>
                Touch to preview <Kbd block>Shift</Kbd>
            </Hint>
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

const transparent = 'rgba(0,0,0,0.0)'

const Letter = styled.span<{ show: boolean; preview: boolean }>`
    display: inline-block;
    text-align: center;
    position: relative;
    margin: 0 0.025em;
    height: 100%;
    min-width: 0.6em;
    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
    transform: ${(props) => (props.show || props.preview ? 'scale(1)' : 'scale(0.5)')};
    color: ${(props) => (props.show ? black : props.preview ? black3 : transparent)};
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
        color: ${black3};
        transform: ${(props) => (props.show ? 'scale(0)' : 'scale(2)')};
        opacity: ${(props) => (props.show || props.preview ? 0 : 1)};
    }
`

const Hint = styled.small`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
    font-size: 12px;
    line-height: 1.6;
    color: ${black1};
`
