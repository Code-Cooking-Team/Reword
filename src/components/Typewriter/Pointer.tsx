import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { dangerColor, purple } from '../../styles/colors'
import { useEffect, useState } from 'react'

type PointerProps = {
    isMistake: boolean
}

export const Pointer = ({ isMistake }: PointerProps) => {
    const pipeSpringPass = useSpring({
        transform: 'translate(0) scaleX(1)',
        from: {
            transform: 'translate(-0.3em) scaleX(3)',
        },
    })
    const pipeSpringError = useSpring({
        to: {
            transform: 'translate(0) scaleX(1)',
            backgroundColor: purple,
        },
        from: {
            transform: 'translate(0.35em) scaleX(6)',
            backgroundColor: dangerColor,
        },
    })
    return <PipeContainer style={isMistake ? pipeSpringError : pipeSpringPass} />
}

const PipeContainer = styled(animated.span)`
    display: inline-block;
    height: 1em;
    width: 0.1em;
    margin: 0 -0.05em;
    vertical-align: middle;
    background-color: ${purple};
`
