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

    console.log(typed)

    return (
        <Container>
            <ScaleText widthOnly={true} maxFontSize={74}>
                <TypeWrapper>
                    {word.split('').map((w, i) => {
                        return (
                            <span key={'typed' + w + i}>
                                {i === progress && <Pipe key={typed} />}
                                <Letter letterState={progress <= i}>{w}</Letter>
                            </span>
                        )
                    })}
                </TypeWrapper>
            </ScaleText>
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
    & > span {
        display: inline-block;
        line-height: 1em;
        height: 90px;
        margin: 0 1px;
        vertical-align: middle;
        position: relative;
    }
`
const Letter = styled.span<{ letterState: boolean }>`
    display: inline-block;
    text-align: center;
    position: relative;
    margin: 0 0.025em;
    height: 100%;
    min-width: 25px;
    transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
    transform: ${props => (props.letterState ? 'scale(0.5)' : 'scale(1)')};
    color: ${props => (props.letterState ? 'rgba(255,255,255,0)' : brand)};
    &::after {
        content: '*';
        position: absolute;
        text-align: center;
        top: 0.5em;
        left: 0;
        line-height: 0.5em;
        height: 20px;
        transition: transform 0.25s cubic-bezier(0.3, 1.61, 0.43, 1.01);
        color: ${muted};
        transform: ${props => (props.letterState ? 'scale(2)' : 'scale(0)')};
        opacity: ${props => (props.letterState ? 1 : 0)};
    }
`

export const Pipe = () => {
    const pipeSpring = useSpring({
        transform: 'translate(0) scaleX(1)',
        from: {
            transform: 'translate(-0.3em) scaleX(3)',
        },
    })
    return <PipeContainer style={pipeSpring} />
}

const PipeContainer = styled(animated.span)`
    display: inline-block;
    height: 1em;
    width: 0.1em;
    margin: 0 -0.05em;
    vertical-align: middle;
    background-color: ${brand};
`
