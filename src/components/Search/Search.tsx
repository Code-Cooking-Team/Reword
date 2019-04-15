import React from 'react'
import styled from 'styled-components'

type SearchProps = {
    value: string
    onChange: (value: string) => void
}

export const Search = (props: SearchProps) => (
    <Input
        type="search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        placeholder="Search…"
    />
)

const Input = styled.input``
