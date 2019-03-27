import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { brand } from '../../styles/colors'

export const Logo = () => {
    const reSpring = useSpring({ opacity: 1, delay: 200, from: { opacity: 0 } })
    const ordSpring = useSpring({ opacity: 1, delay: 400, from: { opacity: 0 } })
    const sepSpring = useSpring({
        transform: 'translate(0)',
        from: { transform: 'translate(-1.2em)' },
    })

    return (
        <Container>
            <First style={reSpring}>Re</First>
            <Sep style={sepSpring}>|</Sep>
            <Last style={ordSpring}>word</Last>
        </Container>
    )
}

const Container = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 74px;
    font-weight: normal;
`

const First = styled(animated.span)`
    display: block;
`

const Last = styled(animated.span)`
    display: block;
`

const Sep = styled(animated.span)`
    display: block;
    font-weight: bold;
    color: ${brand};
`
