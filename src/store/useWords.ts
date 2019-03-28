import { dispatch, useGlobalState } from './state/store'
import { useEffect } from 'react'

export const useWords = () => {
    const [words] = useGlobalState('words')

    const addWord = (name: string, translation: string, example?: string) => {
        dispatch({ type: 'WORDS/ADD_WORD', payload: { name, translation, example } })
    }

    const removeWord = (id: string) => {
        dispatch({ type: 'WORDS/REMOVE_WORD', payload: { id } })
    }

    const randomWord = () => {
        return words[Math.floor(Math.random() * words.length)]
    }

    return { words, addWord, removeWord, randomWord }
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
