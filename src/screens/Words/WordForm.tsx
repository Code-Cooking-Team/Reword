import React, { useState } from 'react'
import styled from 'styled-components'
import { useWords } from '../../store'
import { Modal } from '../../components/Modal'
import { Input } from '../../components/Input'
import { useDictionary } from '../../hooks/useDictionary'
import { DictionaryTrans } from '../../hooks/useDictionary/types'
import { light } from '../../styles/colors'
import { UnSavedWord } from '../../store/state/types/State'

type WordFormProps = {
    show: boolean
    onClose: () => void
    onSave: (word: UnSavedWord) => void
}

export const WordForm = (props: WordFormProps) => {
    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('')
    const [example, setExample] = useState('')

    const { results } = useDictionary(word)

    const addNewWord = () => {
        props.onSave({
            name: word.trim(),
            translation: [translation],
            example: example ? [example] : [],
        })
        setWord('')
        setTranslation('')
        setExample('')
    }

    const getTrans = (trans: DictionaryTrans[]) => trans.map(t => t.texts[0]).join(', ')

    // TO DO USE
    // const [translationList, translationAction] = useList<string>()

    return (
        <Modal
            show={props.show}
            footer={() => (
                <>
                    <button onClick={props.onClose}>Close</button>
                    <button onClick={addNewWord}>Save</button>
                </>
            )}
            close={props.onClose}
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
