import { useState, useMemo } from 'react'
import { useDebounce } from '../useDebounce'
import { DictionaryItem, fetchDictionary } from './fetchDictionary'

export const useDictionary = (query: string) => {
    const [results, setResults] = useState<DictionaryItem | null>(null)
    const [currentQuery, setCurrentQuery] = useState('')
    const [autocomplete, setAutocomplete] = useState<string[]>([])

    useDebounce(() => setCurrentQuery(query), 400, [query])

    useMemo(() => {
        const letter = (currentQuery[0] || '').toLowerCase()

        const run = async () => {
            const list = await fetchDictionary(letter)

            if (!list) {
                setResults(null)
                setAutocomplete([])
                return
            }

            const results = list.find(item => item.word === query)
            const ac = list
                .filter(item => item.word.startsWith(query))
                .map(item => item.word)
                .slice(0, 5)

            setResults(results)
            setAutocomplete(ac)
        }

        run()
    }, [currentQuery, query])

    return { results, autocomplete }
}
