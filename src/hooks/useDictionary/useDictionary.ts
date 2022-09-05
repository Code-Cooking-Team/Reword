import { useState, useMemo } from 'react'
import { useDebounce } from '../useDebounce'
import { fetchDictionary } from './fetchDictionary'
import { DictionaryItem, DictionaryTrans } from './types'

export const useDictionary = (query: string) => {
    const [currentQuery, setCurrentQuery] = useState('')

    const [results, setResults] = useState<DictionaryItem[]>([])

    useDebounce(() => setCurrentQuery(query.toLowerCase()), 400, [query])

    useMemo(() => {
        const letter = (currentQuery[0] || '').toLowerCase()

        const run = async () => {
            const list = await fetchDictionary(letter)

            if (!list) {
                setResults([])
                return
            }

            const results = list
                .filter((item) => item.word.toLowerCase().startsWith(currentQuery))
                .slice(0, 5)

            setResults(results)
        }

        run()
    }, [currentQuery])

    return { results }
}

export const formatTrans = (trans: DictionaryTrans[]) =>
    trans.map((t) => t.texts[0]).join(', ')
