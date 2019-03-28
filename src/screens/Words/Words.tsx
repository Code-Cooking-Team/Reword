import React, { useState } from 'react'
import styled from 'styled-components'
import { useWords } from '../../store'

export const Words = () => {
    const { words, addWord, removeWord } = useWords()
    const [newWord, setNewWord] = useState('')
    const [search, setSearch] = useState('')

    const addNewWord = () => {
        addWord(newWord)
        setNewWord('')
    }

    return (
        <div>
            <Header>Words</Header>
            <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search…"
            />
            <div>
                {words
                    .filter(word => word.name.includes(search))
                    .map(word => (
                        <div key={word.id}>
                            <b>{word.name}</b>
                            <button onClick={() => removeWord(word.id)}>x</button>
                        </div>
                    ))}
            </div>
            <input
                type="text"
                value={newWord}
                onChange={e => setNewWord(e.target.value)}
            />
            <AddButton onClick={addNewWord}>Add new word</AddButton>
        </div>
    )
}

const Header = styled.h1``

const AddButton = styled.button``
