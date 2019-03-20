import seedRandom from 'seed-random'

const KEYS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].map(row => row.split(''))

type WordKey = {
    visible: boolean
    key: string
}

type WordKeyList = WordKey[][]

export const getKeysForWord = (originalWord: string, fakeKeys = 0): WordKeyList => {
    const word = originalWord.toLowerCase()

    return KEYS.map(row => row.map(k => getKey(k, word, fakeKeys)))
}

const getKey = (key: string, word: string, fakeKeys: number): WordKey => {
    const random = fakeKeys ? seedRandom(key + word)() : 0

    return {
        key,
        visible: word.indexOf(key) !== -1 || fakeKeys > random
    }
}
