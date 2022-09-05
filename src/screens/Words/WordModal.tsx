import { Modal } from '../../components/Modal'
import { Tabs, TabsItem } from '../../components/Tabs'
import { WordForm } from './WordForm'

type WordModalProps = {
    show: boolean
    onDismiss: () => void
}

export const WordModal = (props: WordModalProps) => {
    return (
        <Modal show={props.show} onOverlayClick={props.onDismiss}>
            <Tabs>
                <TabsItem name="New word">
                    <WordForm onDismiss={props.onDismiss} />
                </TabsItem>
                <TabsItem name="Presets">{/* <WordPresets /> */}</TabsItem>
            </Tabs>
        </Modal>
    )
}
