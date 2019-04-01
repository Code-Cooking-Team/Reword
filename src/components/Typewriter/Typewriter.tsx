import React from 'react'
import styled from 'styled-components'
import ScaleText from 'react-scale-text'
import { animated, useSpring } from 'react-spring'
import { brand, muted } from '../../styles/colors'

type TypewriterProps = {
    word: string
    progress: number
}

export const Typewriter = (props: TypewriterProps) => {
    const { word, progress } = props
    const typed = word.substr(0, progress)
    const starts = '*'.repeat(word.length - progress)

    return (
        <Container>
            <ScaleText widthOnly={true} maxFontSize={74}>
                <TypeWrapper>
                    <Typed>{typed}</Typed>
                    <Pipe key={typed} />
                    <Stars>{starts}</Stars>
                </TypeWrapper>
            </ScaleText>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    font-size: 74px;
    font-weight: normal;
    padding: 10px 25px;
    overflow: hidden;
    width: 100%;
`
const TypeWrapper = styled.div`
    white-space: nowrap;
    position: relative;
    width: 100%;
`
const Typed = styled.span`
    display: inline-block;
`

const Stars = styled.span`
    display: inline-block;
    color: ${muted};
`

export const Pipe = () => {
    const pipeSpring = useSpring({
        transform: 'translate(0)',
        from: {
            transform: 'translate(-0.3em)',
        },
    })

    return <PipeContainer style={pipeSpring} />
}

const PipeContainer = styled(animated.span)`
    display: inline-block;
    height: 1em;
    width: 0.1em;
    margin: 0 0.05em;
    vertical-align: middle;
    background-color: ${brand};
`
