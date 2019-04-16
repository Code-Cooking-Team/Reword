export type DictionaryItem = {
    id: string
    word: string
    trans: DictionaryTrans[]
}

type DictionaryTrans = {
    gramGrp: string
    texts: string[]
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const cache = {}

export const fetchDictionary = async (
    letter: string
): Promise<DictionaryItem[] | null> => {
    if (!alphabet.includes(letter)) {
        return null
    }

    if (cache[letter]) {
        return cache[letter]
    }

    const res = await fetch(`/dictionary/en-pl/${letter}.json`)
    const data: DictionaryItem[] = await res.json()

    cache[letter] = data

    return data
}
