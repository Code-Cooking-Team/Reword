import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { useDictionary } from './useFindWord'

storiesOf('Hooks / useDictionary', module)
    .addDecorator(withKnobs)
    .add('default', () => <Example />)

export const Example = () => {
    const [query, setQuery] = useState('')
    const { results, autocomplete } = useDictionary(query)

    return (
        <div>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />

            <h4>Autocomplete</h4>
            <pre>{JSON.stringify(autocomplete, null, 2)}</pre>

            <h4>Results</h4>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    )
}
