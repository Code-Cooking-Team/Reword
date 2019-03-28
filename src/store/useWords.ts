import { dispatch, useGlobalState } from './state/store'
import { useEffect } from 'react'

export const useWords = () => {
    const [words] = useGlobalState('words')

    const addWord = (word: string) => {
        dispatch({ type: 'WORDS/ADD_WORD', payload: { name: word } })
    }

    const removeWord = (id: string) => {
        dispatch({ type: 'WORDS/REMOVE_WORD', payload: { id } })
    }

    return { words, addWord, removeWord }
}

export const useWordsPersist = () => {
    const [words] = useGlobalState('words')

    useEffect(() => {
        if (words.length) {
            localStorage.setItem('words', JSON.stringify(words))
        }
    }, [words])

    useEffect(() => {
        const json = localStorage.getItem('words')
        if (json) {
            const wordsFromStorage = JSON.parse(json)
            dispatch({ type: 'WORDS/SET', payload: wordsFromStorage })
        }
    }, [])
}
