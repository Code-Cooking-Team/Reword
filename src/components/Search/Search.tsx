import React from 'react'
import styled from 'styled-components'
import { barShadow } from '../../styles/shadow'
import { Icon } from '../Icon'

type SearchProps = {
    value: string
    onChange: (value: string) => void
}

export const Search = (props: SearchProps) => (
    <SearchBox>
        <Input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            placeholder="Search…"
        />
        <IconPos onClick={() => props.onChange('')}>
            {props.value ? (
                <Icon name="Cross" size="normal" />
            ) : (
                <Icon name="Search" size="normal" />
            )}
        </IconPos>
    </SearchBox>
)

const SearchBox = styled.div`
    position: relative;
    margin-top: 15px;
`

const Input = styled.input`
    padding: 13px 20px;
    width: 100%;
    max-width: 290px;
    border-radius: 20px;
    border: 1px solid #fff;
    box-shadow: ${barShadow};
`

const IconPos = styled.div`
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    margin: auto 0;
    height: 24px;
    line-height: 0;
`
