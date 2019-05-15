import { keyframes, css } from 'styled-components'
const fadeUpKeyframes = keyframes`
  from {
    transform: translateY(60px) scale(0.8);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

export const fadeUpAnimation = css`
    animation: ${fadeUpKeyframes} 0.4s ease forwards;
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
    animation: ${fadeInKeyframes} 0.4s ease forwards;
`
