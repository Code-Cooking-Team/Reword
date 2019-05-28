import React, { useState } from 'react'
import { FloatingButton } from '../../components/FloatingButton'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { Search } from '../../components/Search'
import { useWords } from '../../store'
import { WordsItem } from './WordsItem'

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
            <Modal
                show={showModal}
                footer={() => (
                    <>
                        <button onClick={() => setShowModal(false)}>Close</button>
                        <button onClick={addNewWord}>Save</button>
                    </>
                )}
                close={() => setShowModal(false)}
            >
                <div>
                    <Input value={word} onChange={setWord} placeholder="Word" />
                </div>
                <div>
                    <Input
                        value={translation}
                        onChange={setTranslation}
                        placeholder="Translation"
                    />
                </div>
                <div>
                    <Input value={example} onChange={setExample} placeholder="Example" />
                </div>
            </Modal>
        </div>
    )
}
