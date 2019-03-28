import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { brand } from '../../styles/colors'

export const Logo = () => {
    const reSpring = useSpring({
        opacity: 1,
        transform: 'translate(0)',
        delay: 200,
        from: {
            opacity: 0,
            transform: 'translate(-0.2em)',
        },
    })
    const wordSpring = useSpring({
        opacity: 1,
        transform: 'translate(0)',
        delay: 300,
        from: {
            opacity: 0,
            transform: 'translate(-0.2em)',
        },
    })
    const sepSpring = useSpring({
        transform: 'translate(0) scaleX(1)',
        from: {
            transform: 'translate(-1.2em) scaleX(5)',
        },
    })

    return (
        <Container>
            <First style={reSpring}>Re</First>
            <Sep style={sepSpring} />
            <Last style={wordSpring}>word</Last>
        </Container>
    )
}

const Container = styled.h1`
    text-align: center;
    font-size: 74px;
    font-weight: normal;
`

const First = styled(animated.span)`
    display: inline-block;
`

const Last = styled(animated.span)`
    display: inline-block;
`

const Sep = styled(animated.span)`
    display: inline-block;
    height: 1em;
    width: 0.1em;
    margin: 0 0.05em;
    vertical-align: middle;
    background-color: ${brand};
`
