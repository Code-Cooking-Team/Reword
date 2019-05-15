import React from 'react'
import { WordsState } from '../../store/state/types/State'
import { useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'
import { Icon } from '../../components/Icon'
import { white, brand } from '../../styles/colors'
import styled from 'styled-components'
import { floatingShadow } from '../../styles/shadow'

type StartButtonProps = {
    words: WordsState
    loading: boolean
}

export const StartButton = (props: StartButtonProps) => {
    const { setRoute } = useRouter()

    if (props.loading) {
        return <CircleButton>Loading</CircleButton>
    }

    if (!props.words.length) {
        return (
            <CircleButton onClick={() => setRoute(RouteName.Words)}>
                <Icon name="plus" size="large" block />
                Word
            </CircleButton>
        )
    }

    return (
        <CircleButton onClick={() => setRoute(RouteName.Game)}>
            <Icon name="play" size="large" block />
            Play
        </CircleButton>
    )
}

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
`