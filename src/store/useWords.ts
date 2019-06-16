import { dispatch, useGlobalState } from './state/store'

export const useWords = () => {
    const [words] = useGlobalState('words')

    const addWord = (name: string, translation: string[], example?: string[]) => {
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
