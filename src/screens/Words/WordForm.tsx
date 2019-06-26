import React, { useState } from 'react'
import useList from 'react-use/lib/useList'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { EditableList } from '../../components/EditableList'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { useDictionary } from '../../hooks/useDictionary'
import { DictionaryTrans } from '../../hooks/useDictionary/types'
import { UnSavedWord } from '../../store/state/types/State'
import { light } from '../../styles/colors'

type WordFormProps = {
    show: boolean
    onClose: () => void
    onSave: (word: UnSavedWord) => void
}

export const WordForm = (props: WordFormProps) => {
    const [wordInput, setWordInput] = useState('')
    const [translationInput, setTranslationInput] = useState('')
    const [exampleInput, setExampleInput] = useState('')

    const [translationList, translationListActions] = useList<string>()
    const [exampleList, exampleListActions] = useList<string>()

    const { results } = useDictionary(wordInput)

    const addNewWord = () => {
        props.onSave({
            name: wordInput,
            translation: translationList,
            example: exampleList,
        })
        setWordInput('')
        setTranslationInput('')
        setExampleInput('')
        props.onClose()
    }

    const getTrans = (trans: DictionaryTrans[]) => trans.map(t => t.texts[0]).join(', ')

    return (
        <Modal
            show={props.show}
            footer={() => (
                <>
                    <Button onClick={props.onClose}>Close</Button>
                    <Button onClick={addNewWord}>Save</Button>
                </>
            )}
            close={props.onClose}
        >
            <h4>Word</h4>
            <div>
                <Input value={wordInput} placeholder="Word" onChange={setWordInput} />
            </div>
            {!translationList.length && (
                <div>
                    {results.map(item => (
                        <AutocompleteItem
                            key={item.id}
                            onClick={() => {
                                setWordInput(item.word)
                                const translations = item.trans.map(t => t.texts[0])
                                translationListActions.set(translations)
                            }}
                        >
                            <b>{item.word}</b> - {getTrans(item.trans)}
                        </AutocompleteItem>
                    ))}
                </div>
            )}

            <h4>Translations</h4>
            <EditableList list={translationList} onChange={translationListActions.set} />
            <InputWithButtonWrapper>
                <div>
                    <Input
                        value={translationInput}
                        onChange={setTranslationInput}
                        placeholder="Translation"
                    />
                </div>
                <Button
                    onClick={() => {
                        if (!translationInput) return
                        translationListActions.push(translationInput)
                        setTranslationInput('')
                    }}
                >
                    +
                </Button>
            </InputWithButtonWrapper>

            <h4>Examples</h4>
            <EditableList list={exampleList} onChange={translationListActions.set} />
            <InputWithButtonWrapper>
                <div>
                    <Input
                        value={exampleInput}
                        onChange={setExampleInput}
                        placeholder="Example"
                    />
                </div>
                <Button
                    onClick={() => {
                        if (!exampleInput) return
                        exampleListActions.push(exampleInput)
                        setExampleInput('')
                    }}
                >
                    +
                </Button>
            </InputWithButtonWrapper>
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

const InputWithButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`
