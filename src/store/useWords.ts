import { dispatch, useGlobalState } from './state/store'
import { UnSavedWord, Word } from './state/types/State'

export const useWords = () => {
    const [words] = useGlobalState('words')

    const addWord = (word: UnSavedWord) => {
        dispatch({ type: 'WORDS/ADD_WORD', payload: word })
    }

    const addManyWords = (words: UnSavedWord[]) => {
        dispatch({ type: 'WORDS/ADD_MANY_WORDS', payload: words })
    }

    const removeWord = (id: string) => {
        dispatch({ type: 'WORDS/REMOVE_WORD', payload: { id } })
    }

    const randomWord = (): Word | null => {
        if (!words || !words.length) return null
        return words[Math.floor(Math.random() * words.length)]
    }

    return { words, addWord, addManyWords, removeWord, randomWord }
}
