import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Transition, { TransitionStatus } from 'react-transition-group/Transition'
import styled from 'styled-components'
import { fadeInOutAnimation, fadeUpDownAnimation } from '../../styles/animations'
import { white } from '../../styles/colors'
import { floatingShadow } from '../../styles/shadow'

type ModalProps = {
    show: boolean
    children?: ReactNode
    onOverlayClick?: () => void
}

export const Modal = (props: ModalProps) => {
    return ReactDOM.createPortal(
        <Transition in={props.show} timeout={1000}>
            {status => (
                <>
                    <ModalBox status={status}>{props.children}</ModalBox>
                    <Overlay status={status} onClick={props.onOverlayClick} />
                </>
            )}
        </Transition>,
        modalRoot
    )
}

const modalRoot = document.getElementById('modals')

const ModalBox = styled.div<{ status: TransitionStatus }>`
    position: fixed;
    left: 0;
    max-width: 750px;
    right: 0;
    display: block;
    bottom: 15px;
    margin: 0 auto auto;
    width: calc(100vw - 20px);
    max-height: calc(100vh - 20px);
    overflow-y: auto;
    background: ${white};
    border-radius: 4px;
    z-index: 1000;
    padding: 15px;
    box-shadow: ${floatingShadow};
    ${p => fadeUpDownAnimation(p.status)};
`

const Overlay = styled.div<{ status: TransitionStatus }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 100;
    ${p => fadeInOutAnimation(p.status)};
`
