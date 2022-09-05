import { useEffect, useState } from 'react'
import { useWords } from '../../firebase/firestore/useWords'
import { Word } from '../../firebase/types/Word'

const emptyWord: Word = {
    name: '',
    translation: [],
    example: [],
}

export const useGame = () => {
    const { words, randomWord } = useWords()
    const [progress, setProgress] = useState(0)
    const [word, setWord] = useState(emptyWord)

    useEffect(() => {
        const newWord = randomWord()
        if (newWord) setWord(newWord)
    }, [words])

    const wordRight = word.name.substr(progress)
    const isComplete = progress === word.name.length

    const keyPress = (key: string) => {
        const currentWord = word.name[progress].toLocaleLowerCase()
        if (key === currentWord) {
            setProgress(progress + 1)
        }
    }

    const nextWord = () => {
        setWord(randomWord())
        setProgress(0)
    }

    const retry = () => {
        setProgress(0)
    }

    return { word, progress, wordRight, nextWord, retry, keyPress, isComplete }
}
