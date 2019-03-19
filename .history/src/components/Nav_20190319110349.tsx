import * as React from 'react'
import styled from 'styled-components'

type NavProps = {
  active: string
  onChange(page: string): void
}

export const Nav = (prop: NavProps) => {
  return (
    <Container>
      <li>
        <button onClick={() => prop.onChange('home')}>Home</button>
      </li>
      <li>
        <button onClick={() => prop.onChange('words')}>Words</button>
      </li>
      <li>
        <button onClick={() => prop.onChange('settings')}>
          Settings
        </button>
      </li>
    </Container>
  )
}

const Container = styled.ul`
  background: red;
`
