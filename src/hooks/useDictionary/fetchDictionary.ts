import { DictionaryItem } from './types'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const cache: Record<string, DictionaryItem[]> = {}

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
