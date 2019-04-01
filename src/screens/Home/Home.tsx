import * as React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/Logo'
import { useWords, useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'
import { white, brand } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { Icon } from '../../components/Icon'

export const Home = () => {
    const { setRoute } = useRouter()
    const { words } = useWords()
    return (
        <Container>
            <Logo />
            {words.length ? (
                <>
                    <CircleButton onClick={() => setRoute(RouteName.Game)}>
                        <Icon name="play" size="large" />
                        <span>Play</span>
                    </CircleButton>
                    <WordsCount>
                        You added <b>{words.length}</b> words
                    </WordsCount>
                </>
            ) : (
                <CircleButton onClick={() => setRoute(RouteName.Words)}>
                    <Icon name="plus" size="large" />
                    <span>Word</span>
                </CircleButton>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    height: 100%;
    /* grid-template-rows: 2fr 2fr 2fr; */
    grid-auto-rows: 0.5fr 3fr 1fr;
    align-items: center;
    justify-items: center;
`

const WordsCount = styled.div`
    padding: 25px;
    text-align: center;
`

const playSize = '45vmin'

const CircleButton = styled.button`
    background: ${white};
    border: none;
    box-shadow: ${floatingShadow};
    width: ${playSize};
    height: ${playSize};
    max-width: 260px;
    max-height: 260px;
    border-radius: 100%;
    color: ${brand};
    font-size: 36px;

    span {
        display: block;
    }
`
