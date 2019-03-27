import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

const useList = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem('words') || '[]'))

    useEffect(() => {
        localStorage.setItem('words', JSON.stringify(list))
    }, [list])

    return {
        list,
        add: newWord => {
            if (newWord) {
                return setList([...list, { name: newWord, id: uuid() }])
            }
        },
        remove: removeWordId => setList(list.filter(word => word.id != removeWordId)),
    }
}

export const Words = () => {
    const [newWord, setNewWord] = useState('')
    const [search, setSearch] = useState('')
    const { list, add, remove } = useList()

    const searchFilter = el => {
        return el.name.indexOf(search) > -1
    }

    return (
        <div>
            <H1>Words - {newWord}</H1>
            <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div>
                {list.filter(searchFilter).map(a => (
                    <div key={a.id}>
                        {a.name}
                        <Remove
                            onClick={() => {
                                remove(a.id)
                            }}
                        >
                            X
                        </Remove>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newWord}
                onChange={e => setNewWord(e.target.value)}
            />
            <Add
                onClick={() => {
                    setNewWord('')
                    add(newWord)
                }}
            >
                As
            </Add>
        </div>
    )
}

const H1 = styled.h1`
    background: red;
`

const Add = styled.button`
    background: red;
`

const Remove = styled.button`
    background: red;
    padding-left: 2px;
`
