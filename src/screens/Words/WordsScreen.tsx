import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FloatingButton } from '../../components/FloatingButton'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Space } from '../../components/Space/Space'
import { useWords } from '../../firebase/firestore/useWords'
import { RouteName } from '../../RouteName'
import { navHeight } from '../../styles/values'
import { WordsItem } from './WordsItem'

export const WordsScreen = () => {
    const [search, setSearch] = useState('')
    const { words, removeWord } = useWords()
    const navigate = useNavigate()

    return (
        <Container>
            <Header title="Words" iconName="Words">
                <SearchWrapper>
                    <Search value={search} onChange={setSearch} />
                </SearchWrapper>
            </Header>
            <Space>
                {words
                    .filter((word) =>
                        word.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    )
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((word, index) => (
                        <WordsItem
                            key={word.name + index}
                            word={word}
                            removeWord={() => removeWord(word.id)}
                        />
                    ))}
            </Space>
            <FloatingButton
                onClick={() => navigate(`/${RouteName.NewWord}`)}
                iconName="Plus"
            />
        </Container>
    )
}

const Container = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding-bottom: ${navHeight};
`

const SearchWrapper = styled.div`
    margin-top: 15px;
    align-self: stretch;
    display: flex;
    justify-content: center;
`
