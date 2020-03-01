import React from 'react'
import { Modal } from '../../components/Modal'
import { UnSavedWord } from '../../store/state/types/State'
import { Tabs, TabsItem } from '../../components/Tabs'
import { WordForm } from './WordForm'
import { WordPresets } from './WordPresets'

type WordModalProps = {
    show: boolean
    onDismiss: () => void
}

export const WordModal = (props: WordModalProps) => {
    return (
        <Modal show={props.show} onOverlayClick={props.onDismiss}>
            <Tabs>
                <TabsItem name="New word">
                    <WordForm onSave={props.onDismiss} />
                </TabsItem>
                <TabsItem name="Presets">
                    <WordPresets />
                </TabsItem>
            </Tabs>
        </Modal>
    )
}
