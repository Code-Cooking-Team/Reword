import {
    ENTERING,
    EXITED,
    EXITING,
    TransitionStatus,
} from 'react-transition-group/Transition'
import { css, keyframes } from 'styled-components'

export const fadeDuration = 400
const easing = 'cubic-bezier(0.29, 0.87, 0.54, 0.99)'

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

const fadeDownKeyframes = keyframes`
    from {
        transform: translateY(0px);
        opacity: 1;
    }
    to {
        transform: translateY(80px);
        opacity: 0;
    }
`

const fadeInKeyframes = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

const fadeOutKeyframes = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`

export const fadeUpAnimation = css`
    animation: ${fadeUpKeyframes} ${fadeDuration}ms ${easing} forwards;
`

export const fadeDownAnimation = css`
    animation: ${fadeDownKeyframes} ${fadeDuration}ms ${easing} forwards;
`

export const fadeUpDownAnimation = (status: TransitionStatus) => css`
    ${status === ENTERING && fadeUpAnimation};
    ${status === EXITING && fadeDownAnimation};
    ${status === EXITING && `pointer-events: none;`};
    ${status === EXITED && 'pointer-events: none; opacity: 0;'};
`

export const fadeInAnimation = css`
    animation: ${fadeInKeyframes} ${fadeDuration}ms ${easing} forwards;
`

export const fadeOutAnimation = css`
    animation: ${fadeOutKeyframes} ${fadeDuration}ms ${easing} forwards;
`

export const fadeInOutAnimation = (status: TransitionStatus) => css`
    ${status === ENTERING && fadeInAnimation};
    ${status === EXITING && fadeOutAnimation};
    ${status === EXITING && `pointer-events: none;`};
    ${status === EXITED && 'pointer-events: none; opacity: 0;'};
`
