import React, { useState } from 'react'
import { FloatingButton } from '../../components/FloatingButton'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { useWords } from '../../store'
import { WordForm } from './WordForm'
import { WordsItem } from './WordsItem'

export const Words = () => {
    const { words, removeWord, addWord } = useWords()
    const [search, setSearch] = useState('')

    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <Header title="Words" iconName="words">
                <Search value={search} onChange={setSearch} />
            </Header>
            <div>
                {words &&
                    words
                        .filter(word => word.name.includes(search))
                        .map(word => (
                            <WordsItem
                                key={word.id}
                                word={word}
                                removeWord={() => removeWord(word.id)}
                            />
                        ))}
            </div>
            <FloatingButton onClick={() => setShowModal(!showModal)} iconName="plus" />
            <WordForm
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={addWord}
            />
        </div>
    )
}
