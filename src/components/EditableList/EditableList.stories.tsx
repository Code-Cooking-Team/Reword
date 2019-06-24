import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { EditableList } from './EditableList'
import { action } from '@storybook/addon-actions'

storiesOf('EditableList', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <EditableList list={['ale', 'kot', 'pies']} onChange={action('On change')} />
    ))
