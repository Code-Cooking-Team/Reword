import React, { useState } from 'react'
import styled from 'styled-components'
import { FloatingButton } from '../../components/FloatingButton'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Space } from '../../components/Space/Space'
import { useWords } from '../../store'
import { navHeight } from '../../styles/values'
import { WordModal } from './WordModal'
import { WordsItem } from './WordsItem'

export const WordsScreen = () => {
    const [search, setSearch] = useState('')

    const { words, removeWord } = useWords()
    const [showModal, setShowModal] = useState(false)

    return (
        <Container>
            <Header title="Words" iconName="Words">
                <Search value={search} onChange={setSearch} />
            </Header>
            <Space>
                {words &&
                    words
                        .filter(word =>
                            word.name
                                .toLocaleLowerCase()
                                .includes(search.toLocaleLowerCase())
                        )
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(word => (
                            <WordsItem
                                key={word.id}
                                word={word}
                                removeWord={() => removeWord(word.id)}
                            />
                        ))}
            </Space>
            <FloatingButton onClick={() => setShowModal(!showModal)} iconName="Plus" />
            <WordModal show={showModal} onDismiss={() => setShowModal(false)} />
        </Container>
    )
}

const Container = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding-bottom: ${navHeight};
`
