import { dispatch, useGlobalState } from './state/store'

export const useWords = () => {
    const [words] = useGlobalState('words')

    const addWord = (word: string) => {
        dispatch({ type: 'WORDS/ADD_WORD', payload: { word } })
    }

    const removeWord = (id: string) => {
        dispatch({ type: 'WORDS/REMOVE_WORD', payload: { id } })
    }

    return { words, addWord, removeWord }
}
