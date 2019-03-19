import * as React from 'react'
import styled from 'styled-components'

export const Home = () => {
    return (
        <div>
            <H1>Home</H1>
            <Start>As</Start>
        </div>
    )
}

const H1 = styled.h1`
  background: red;
`

const Start = styled.button`
  background: red;
`
