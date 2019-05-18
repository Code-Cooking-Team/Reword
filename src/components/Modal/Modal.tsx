import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { fadeInAnimation, fadeUpAnimation } from '../../styles/animation'
import ReactDOM from 'react-dom'
import { white } from '../../styles/colors'

type ModalProps = {
    children?: ReactNode
    footer?: () => ReactNode
    close?: () => void
}

export const Modal = (props: ModalProps) => {
    return ReactDOM.createPortal(
        <>
            <ModalBox>
                {props.children}
                {props.footer && props.footer()}
            </ModalBox>
            <Overlay onClick={props.close} />
        </>,
        modalRoot
    )
}

const modalRoot = document.getElementById('modals')

const ModalBox = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 15px;
    margin: 0 auto auto;
    /* Ease way to change modal size :) */
    width: calc(100vw - 30px);
    max-height: calc(100vh - 30px);
    overflow-y: auto;
    background: ${white};
    border-radius: 4px;
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
