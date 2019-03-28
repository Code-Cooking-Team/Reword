import React, { useState } from 'react'
import styled from 'styled-components'
import { useWords } from '../../store'

export const Words = () => {
    const { words, addWord, removeWord } = useWords()
    const [search, setSearch] = useState('')

    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('')
    const [example, setExample] = useState('')

    const addNewWord = () => {
        addWord(word.trim(), translation.trim(), example.trim())
        setWord('')
        setTranslation('')
        setExample('')
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
            <table>
                <thead>
                    <tr>
                        <td>Word</td>
                        <td>Translation</td>
                        <td>Example</td>
                    </tr>
                </thead>
                <tbody>
                    {words
                        .filter(word => word.name.includes(search))
                        .map(word => (
                            <tr key={word.id}>
                                <td>
                                    <b>{word.name}</b>
                                </td>
                                <td>
                                    <i>{word.translation}</i>
                                </td>
                                <td>{word.example && <small>{word.example}</small>}</td>
                                <td>
                                    <button onClick={() => removeWord(word.id)}>x</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div>
                Word:
                <input type="text" value={word} onChange={e => setWord(e.target.value)} />
            </div>
            <div>
                Translation:
                <input
                    type="text"
                    value={translation}
                    onChange={e => setTranslation(e.target.value)}
                />
            </div>
            <div>
                Example:
                <input
                    type="text"
                    value={example}
                    onChange={e => setExample(e.target.value)}
                />
            </div>
            <AddButton onClick={addNewWord}>Add new word</AddButton>
        </div>
    )
}

const Header = styled.h1``

const AddButton = styled.button``
