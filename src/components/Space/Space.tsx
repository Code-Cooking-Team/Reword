import styled, { css } from 'styled-components'

export const Space = styled.div<{ addPadding?: boolean }>`
    max-width: 600px;
    margin: auto;
    width: 100%;
    ${(p) =>
        p.addPadding &&
        css`
            padding: 12px;
        `}
`
