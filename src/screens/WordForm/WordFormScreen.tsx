import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Space } from '../../components/Space/Space'
import { useWords } from '../../firebase/firestore/useWords'
import { Word } from '../../firebase/types/Word'
import { navHeight } from '../../styles/values'
import { WordForm } from './WordForm'

export const WordFormScreen = () => {
    const { wordName } = useParams()
    const navigate = useNavigate()
    const { findWord, updateWord, addWord } = useWords()

    const word = wordName ? findWord(wordName) : undefined

    const handleSubmit = (newWord: Word): void => {
        if (word) {
            updateWord(word.id, newWord)
        } else {
            addWord(newWord)
        }
        navigate(-1)
    }

    return (
        <Container>
            <Header title={word ? 'Edit word' : 'Add word'} iconName="Words" />
            <Space addPadding>
                <WordForm
                    word={word}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate(-1)}
                />
            </Space>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    padding-bottom: ${navHeight};
`
