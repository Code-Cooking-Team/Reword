import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { brand } from '../../styles/colors'

export const Pointer = () => {
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
