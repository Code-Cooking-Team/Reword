import { useState, useMemo } from 'react'
import { useDebounce } from '../useDebounce'
import { DictionaryItem, fetchDictionary } from './fetchDictionary'

export const useDictionary = (query: string) => {
    const [currentQuery, setCurrentQuery] = useState('')

    const [results, setResults] = useState<DictionaryItem | null>(null)
    const [autocomplete, setAutocomplete] = useState<string[]>([])

    useDebounce(() => setCurrentQuery(query.toLowerCase()), 400, [query])

    useMemo(() => {
        const letter = (currentQuery[0] || '').toLowerCase()

        const run = async () => {
            const list = await fetchDictionary(letter)

            if (!list) {
                setResults(null)
                setAutocomplete([])
                return
            }

            const results = list.find(item => item.word.toLowerCase() === currentQuery)
            const acList = list
                .filter(item => item.word.toLowerCase().startsWith(currentQuery))
                .map(item => item.word)
                .slice(0, 5)

            setResults(results)
            setAutocomplete(acList)
        }

        run()
    }, [currentQuery])

    return { results, autocomplete }
}
