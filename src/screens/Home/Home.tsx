import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'

export const Home = () => {
    return (
        <div>
            <Logo />
            <Start>As</Start>
        </div>
    )
}

const Start = styled.button`
    background: red;
`
