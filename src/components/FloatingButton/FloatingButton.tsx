import styled from 'styled-components'
import { purple, white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'
import { navHeight } from '../../styles/values'
import { Icon, IconName } from '../Icon'

type FloatingButtonProps = {
    onClick: () => void
    iconName: IconName
}

export const FloatingButton = (props: FloatingButtonProps) => (
    <Button onClick={props.onClick}>
        <Icon name={props.iconName} size="big" />
    </Button>
)

const Button = styled.button`
    position: sticky;
    display: block;
    padding: 13px;
    border: 2px solid ${white};
    color: ${purple};
    box-shadow: ${floatingShadow};
    border-radius: 50%;
    background: ${white};
    transition: 0.2s;
    margin: 15px 15px 17px auto;
    bottom: calc(17px + ${navHeight});
    &:active {
        border-color: ${purple};
    }
`
