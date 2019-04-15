import React, { useState } from 'react'
import styled from 'styled-components'
import { useWords } from '../../store'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { FloatingButton } from '../../components/FloatingButton'
import { WordsItem } from './WordsItem'

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
            <Header title="Words" iconName="words">
                <Search value={search} onChange={setSearch} />
            </Header>

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
                            <WordsItem
                                key={word.id}
                                word={word}
                                removeWord={removeWord}
                            />
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
            {/* <AddButton onClick={addNewWord}>Add new word</AddButton> */}
            <FloatingButton onClick={addNewWord} iconName="plus" />
        </div>
    )
}
