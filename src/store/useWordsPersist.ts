import { dispatch, useGlobalState } from './state/store'
import { useEffect } from 'react'

export const useWordsPersist = () => {
    const [words] = useGlobalState('words')

    useEffect(() => {
        if (words && words.length) {
            localStorage.setItem('words', JSON.stringify(words))
        }
    }, [words])

    useEffect(() => {
        const json = localStorage.getItem('words')
        if (!json) return

        const wordsFromStorage = JSON.parse(json)

        // TODO remove timeout ;)
        setTimeout(() => {
            dispatch({ type: 'WORDS/SET', payload: wordsFromStorage })
        }, 500)
    }, [])
}
