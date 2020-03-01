import styled, { css } from 'styled-components'
import { black, brandColor, white } from '../../styles/colors'
import { now, slow } from '../../styles/transitions'

export const Button = styled.button<{ size?: string; color?: string }>`
    display: inline-block;
    padding: 10px 25px;
    transition: opacity ${slow};
    font-size: ${p => (p.size && p.size == '20px' ? '20px' : '14px')};

    ${p => {
        if (p.color == 'transparent') {
            return css`
                border: 2px solid transparent;
                color: ${black};
                background: transparent;
            `
        } else if (p.color == 'primary') {
            return css`
                border: 2px solid ${brandColor};
                color: ${white};
                background: ${brandColor};
            `
        } else {
            return css`
                border: 2px solid ${brandColor};
                color: ${black};
                background: transparent;
            `
        }
    }};
    border-radius: 5px;
    &:active {
        opacity: 0.8;
        transition: opacity ${now};
    }
`
