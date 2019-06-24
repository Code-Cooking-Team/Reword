import { dispatch, useGlobalState } from './state/store'
import { UnSavedWord } from './state/types/State'

export const useWords = () => {
    const [words] = useGlobalState('words')

    const addWord = (word: UnSavedWord) => {
        dispatch({ type: 'WORDS/ADD_WORD', payload: word })
    }

    const removeWord = (id: string) => {
        dispatch({ type: 'WORDS/REMOVE_WORD', payload: { id } })
    }

    const randomWord = () => {
        return words[Math.floor(Math.random() * words.length)]
    }

    return { words, addWord, removeWord, randomWord }
}
