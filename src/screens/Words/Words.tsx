import React, { useState } from 'react'
import { FloatingButton } from '../../components/FloatingButton'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { useWords } from '../../store'
import { WordModal } from './WordModal'
import { WordsItem } from './WordsItem'
import styled from 'styled-components'

export const Words = () => {
    const [search, setSearch] = useState('')

    const { words, removeWord } = useWords()
    const [showModal, setShowModal] = useState(false)

    return (
        <Container>
            <Header title="Words" iconName="Words">
                <Search value={search} onChange={setSearch} />
            </Header>
            <div>
                {words &&
                    words
                        .filter(word =>
                            word.name
                                .toLocaleLowerCase()
                                .includes(search.toLocaleLowerCase())
                        )
                        .map(word => (
                            <WordsItem
                                key={word.id}
                                word={word}
                                removeWord={() => removeWord(word.id)}
                            />
                        ))}
            </div>
            <FloatingButton onClick={() => setShowModal(!showModal)} iconName="Plus" />
            <WordModal show={showModal} onDismiss={() => setShowModal(false)} />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`
