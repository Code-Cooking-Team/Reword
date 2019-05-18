import React, { useState } from 'react'
import styled from 'styled-components'
import { useWords } from '../../store'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { FloatingButton } from '../../components/FloatingButton'
import { WordsItem } from './WordsItem'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input'

export const Words = () => {
    const { words, addWord, removeWord } = useWords()
    const [search, setSearch] = useState('')

    const [showModal, setShowModal] = useState(false)
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
            <FloatingButton onClick={() => setShowModal(!showModal)} iconName="plus" />
            {showModal && (
                <Modal
                    footer={() => (
                        <>
                            <button onClick={() => setShowModal(false)}>Close</button>
                            <button onClick={addNewWord}>Zapisz</button>
                        </>
                    )}
                    close={() => setShowModal(false)}
                >
                    <div>
                        <Input
                            type="text"
                            value={word}
                            onChange={val => setWord(val)}
                            placeholder="Word:"
                        />
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
                </Modal>
            )}
        </div>
    )
}
