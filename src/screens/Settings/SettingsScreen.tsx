import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { navHeight } from '../../styles/values'

export const SettingsScreen = () => {
    return (
        <Container>
            <Header title="Profile" iconName="Profile" />
        </Container>
    )
}

const Container = styled.div`
    padding-bottom: ${navHeight};
`

const Center = styled.div`
    text-align: center;
    padding: 20px;
`
