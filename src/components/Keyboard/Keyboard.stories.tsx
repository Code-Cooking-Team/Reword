import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Keyboard } from './Keyboard'
import styled from 'styled-components'

storiesOf('Keyboard', module)
    .addDecorator(withKnobs)
    .addDecorator(item => <Decorator>{item()}</Decorator>)
    .add('default', () => (
        <Keyboard word={text('Word', 'Hello')} onPress={action('onPress')} />
    ))
    .add('with fake keys', () => (
        <Keyboard
            word={text('Word', 'Hello')}
            onPress={action('onPress')}
            fakeKeys={percent('Fake keys', 0.2)}
        />
    ))

const percent = (label: string, value: number): number =>
    number(label, value, {
        range: true,
        min: 0,
        max: 1,
        step: 0.01,
    })

const Decorator = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`
