import { useState } from 'react'
import useList from 'react-use/lib/useList'
import styled, { css } from 'styled-components'
import { Button } from '../../components/Button'
import { EditableList } from '../../components/EditableList'
import { Input } from '../../components/Input'
import { useWords } from '../../firebase/firestore/useWords'
import { useDictionary } from '../../hooks/useDictionary'
import { DictionaryTrans } from '../../hooks/useDictionary/types'
import { easing, fadeDuration } from '../../styles/animations'
import { black05, purple, white } from '../../styles/colors'
import { fast } from '../../styles/transitions'

type WordFormProps = {
    onDismiss: () => void
}

export const WordForm = (props: WordFormProps) => {
    const { addWord } = useWords()

    const [wordInput, setWordInput] = useState('')
    const [translationInput, setTranslationInput] = useState('')
    const [exampleInput, setExampleInput] = useState('')

    const [translationList, translationListActions] = useList<string>()
    const [exampleList, exampleListActions] = useList<string>()

    const { results } = useDictionary(wordInput)

    const addNewWord = () => {
        if (wordInput && translationList.length) {
            addWord({
                name: wordInput,
                translation: translationList,
                example: exampleList,
            })
            setWordInput('')
            setTranslationInput('')
            setExampleInput('')
            translationListActions.clear()
            exampleListActions.clear()
            props.onDismiss()
        }
    }

    const getTrans = (trans: DictionaryTrans[]) => trans.map((t) => t.texts[0]).join(', ')

    return (
        <>
            <h4>Word</h4>
            <div>
                <Input value={wordInput} placeholder="Word" onChange={setWordInput} />
            </div>
            {!translationList.length && (
                <Autocomplete count={results.length}>
                    {results.map((item) => (
                        <AutocompleteItem
                            key={item.id}
                            onClick={() => {
                                setWordInput(item.word)
                                const translations = item.trans.map((t) => t.texts[0])
                                translationListActions.set(translations)
                            }}
                        >
                            <b>{item.word}</b> - {getTrans(item.trans)}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
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
            <ModalActions>
                <Button onClick={props.onDismiss} color="transparent">
                    Close
                </Button>
                <Button onClick={addNewWord} color="primary">
                    Save
                </Button>
            </ModalActions>
        </>
    )
}

const Autocomplete = styled.div<{ count: number }>`
    ${(p) =>
        css`
            height: ${p.count * 46}px;
        `};

    transition: height ${fadeDuration}ms ${easing};
    background: ${black05};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`

const AutocompleteItem = styled.button`
    border-radius: 5px;
    transition: all ${fast};
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    border-bottom: 1px solid ${black05};
    background: none;
    text-align: left;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0) inset;
    text-emphasis: emphasis;

    &:last-child {
        border-bottom: none;
    }
    &:focus {
        background: ${white};
        box-shadow: 0 0 0 1px ${purple} inset;
    }
`

const InputWithButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`

const ModalActions = styled.div`
    margin-top: 15px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-gap: 15px;
    justify-content: end;
`
