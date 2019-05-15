import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { fadeInAnimation, fadeUpAnimation } from '../../styles/animation'
import ReactDOM from 'react-dom'

type ModalProps = {
    children?: ReactNode
    footer?: () => ReactNode
    close?: () => void
}

export const Modal = (props: ModalProps) => {
    return ReactDOM.createPortal(
        <>
            <Container>
                {props.children}
                {props.footer && props.footer()}
            </Container>
            <Overlay onClick={props.close} />
        </>,
        modalRoot
    )
}

const modalRoot = document.getElementById('modals')

const Container = styled.div`
    position: fixed;
    left: 10px;
    right: 10px;
    bottom: 0;
    background: red;
    z-index: 999999;
    ${fadeUpAnimation};
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 100;
    ${fadeInAnimation};
`
