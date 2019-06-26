import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import useList from 'react-use/lib/useList'
import { EditableList } from './EditableList'

storiesOf('EditableList', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <EditableList list={['ale', 'kot', 'pies']} onChange={action('On change')} />
    ))
    .add('with state', () => <EditableListStated />)

export const EditableListStated = () => {
    const [list, { set }] = useList<string>(['ale', 'kot', 'pies'])
    return <EditableList list={list} onChange={set} />
}
