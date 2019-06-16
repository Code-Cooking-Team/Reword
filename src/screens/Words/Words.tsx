import React, { useState } from 'react'
import { FloatingButton } from '../../components/FloatingButton'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { Search } from '../../components/Search'
import { useDictionary } from '../../hooks/useDictionary'
import { DictionaryTrans } from '../../hooks/useDictionary/types'
import { useWords } from '../../store'
import { WordsItem } from './WordsItem'
import styled from 'styled-components'
import { light } from '../../styles/colors'

export const Words = () => {
    const { words, addWord, removeWord } = useWords()
    const [search, setSearch] = useState('')

    const [showModal, setShowModal] = useState(false)
    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('')
    const [example, setExample] = useState('')

    const { results } = useDictionary(word)

    const addNewWord = () => {
        addWord(word.trim(), [translation], example ? [example] : [])
        setWord('')
        setTranslation('')
        setExample('')
    }

    const getTrans = (trans: DictionaryTrans[]) => trans.map(t => t.texts[0]).join(', ')

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
                    <Input value={word} placeholder="Word" onChange={setWord} />
                </div>
                {!translation && (
                    <div>
                        {results.map(item => (
                            <AutocompleteItem
                                key={item.id}
                                onClick={() => {
                                    setWord(item.word)
                                    setTranslation(getTrans(item.trans))
                                }}
                            >
                                <b>{item.word}</b> - {getTrans(item.trans)}
                            </AutocompleteItem>
                        ))}
                    </div>
                )}
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

const AutocompleteItem = styled.button`
    display: block;
    width: 100%;
    padding: 1em 0;
    border: none;
    border-bottom: 1px solid ${light};
    text-align: left;
    font-size: 14px;
`
