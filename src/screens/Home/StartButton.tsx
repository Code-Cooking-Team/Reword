import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
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

    if (!hasWords) {
        return (
            <CircleButton onClick={() => navigate(RouteName.Words)}>
                <Icon name="Plus" size="large" block />
                Word
            </CircleButton>
        )
    }

    return (
        <CircleButton onClick={() => navigate(RouteName.Game)}>
            <Icon name="Play" size="large" block />
            Play
        </CircleButton>
    )
}

const playSize = '45vmin'

const CircleButton = styled.button`
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
`
