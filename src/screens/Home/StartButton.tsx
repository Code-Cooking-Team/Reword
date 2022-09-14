import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useKeyPressEvent } from 'react-use'
import { Kbd } from '../../components/Button/Kbd'
import { Icon } from '../../components/Icon'
import { RouteName } from '../../RouteName'
import { scaleInAnimation } from '../../styles/animations'
import { purple, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'

type StartButtonProps = {
    hasWords: boolean
}

export const StartButton = ({ hasWords }: StartButtonProps) => {
    const navigate = useNavigate()

    const goToWords = () => navigate(RouteName.Words)
    const playGame = () => navigate(RouteName.Game)

    useKeyPressEvent('Enter', hasWords ? playGame : goToWords)

    if (!hasWords) {
        return (
            <CircleButton onClick={goToWords}>
                <Icon name="Plus" size="large" block />
                Word
                <Kbd>Enter</Kbd>
            </CircleButton>
        )
    }

    return (
        <CircleButton onClick={playGame}>
            <Icon name="Play" size="large" block />
            Play
            <Kbd>Enter</Kbd>
        </CircleButton>
    )
}

const playSize = '45vmin'

const CircleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${scaleInAnimation}
    background: ${white};
    border: none;
    box-shadow: ${floatingShadow};
    width: ${playSize};
    height: ${playSize};
    max-width: 260px;
    max-height: 260px;
    border-radius: 100%;
    color: ${purple};
    font-size: 36px;
    line-height: 1.4;
`
