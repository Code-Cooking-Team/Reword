import { keyframes, css } from 'styled-components'
const fadeUpKeyframes = keyframes`
  from {
    transform: translateY(80px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`
export const fadeUpAnimation = css`
    animation: ${fadeUpKeyframes} 0.4s cubic-bezier(0.29, 0.87, 0.54, 0.99) forwards;
`

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const fadeInAnimation = css`
    animation: ${fadeInKeyframes} 0.4s cubic-bezier(0.29, 0.87, 0.54, 0.99) forwards;
`
