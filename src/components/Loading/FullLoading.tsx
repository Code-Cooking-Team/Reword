import { FC } from 'react'
import styled from 'styled-components'
import { Loading } from './Loading'

export const FullLoading: FC = () => {
    return (
        <Container>
            <Loading />
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
