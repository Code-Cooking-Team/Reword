import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { presets } from '../../store/presets'
import { useWords } from '../../store'

export const WordPresets = () => {
    const { addManyWords } = useWords()

    return (
        <Container>
            <ul>
                {presets.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <Button onClick={() => item.getList().then(addManyWords)}>
                            +
                        </Button>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

const Container = styled.div``
