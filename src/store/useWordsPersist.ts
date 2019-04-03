import { dispatch, useGlobalState } from './state/store'
import { useEffect } from 'react'

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
            // TODO remove timeout ;)
            setTimeout(() => {
                dispatch({ type: 'WORDS/SET', payload: wordsFromStorage })
                dispatch({ type: 'APP/SET_LOADING', payload: false })
            }, 500)
        } else {
            dispatch({ type: 'APP/SET_LOADING', payload: false })
        }
    }, [])
}
