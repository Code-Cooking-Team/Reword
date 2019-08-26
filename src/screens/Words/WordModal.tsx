import React from 'react'
import { Modal } from '../../components/Modal'
import { UnSavedWord } from '../../store/state/types/State'
import { Tabs, TabsItem } from '../../components/Tabs'
import { WordForm } from './WordForm'
import { WordPresets } from './WordPresets'

type WordModalProps = {
    show: boolean
    onClose: () => void
}

export const WordModal = (props: WordModalProps) => {
    return (
        <Modal show={props.show} close={props.onClose}>
            <Tabs>
                <TabsItem name="New word">
                    <WordForm />
                </TabsItem>
                <TabsItem name="Presets">
                    <WordPresets />
                </TabsItem>
            </Tabs>
        </Modal>
    )
}
