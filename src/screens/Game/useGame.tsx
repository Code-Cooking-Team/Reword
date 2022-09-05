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
    const [mistakeCount, setMistakeCount] = useState(0)
    const [isMistake, setIsMistake] = useState(false)
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
            increaseProgress()
            setIsMistake(false)
        } else {
            setMistakeCount((val) => val + 1)
            setIsMistake(true)
        }
    }

    const increaseProgress = () => {
        if (progress < word.name.length) {
            setProgress(progress + 1)
        }
    }
    const resetWord = () => {
        setProgress(0)
        setIsMistake(false)
        setMistakeCount(0)
    }

    const nextWord = () => {
        setWord(randomWord())
        resetWord()
    }

    const retry = () => {
        resetWord()
    }

    return {
        word,
        progress,
        wordRight,
        nextWord,
        retry,
        keyPress,
        isComplete,
        mistakeCount,
        isMistake,
    }
}
