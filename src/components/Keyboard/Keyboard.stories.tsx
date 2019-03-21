import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Keyboard, vibrateOk, vibrateBad } from './Keyboard'
import styled from 'styled-components'

storiesOf('Keyboard', module)
    .addDecorator(withKnobs)
    .addDecorator(item => <Decorator>{item()}</Decorator>)
    .add('single word', () => (
        <Keyboard word={text('word', 'Hello')} onPress={action('onPress')} />
    ))
    .add('single word with fake keys', () => (
        <Keyboard
            word={text('word', 'Hello')}
            onPress={action('onPress')}
            fakeKeys={percent('Fake keys', 0.2)}
        />
    ))
    .add('sentence', () => (
        <Keyboard
            word={text(
                'word',
                'A clever person solves a problem, a wise person avoids it'
            )}
            onPress={action('onPress')}
        />
    ))
    .add('sentence with fake keys', () => (
        <Keyboard
            word={text('word', 'Creativity is intelligence having fun')}
            onPress={action('onPress')}
            fakeKeys={percent('Fake keys', 0.2)}
        />
    ))
    .add('vibration test', () => (
        <Keyboard
            word="Hello ,'"
            onPress={() => {
                if (Math.random() > 0.2) {
                    vibrateOk()
                } else {
                    vibrateBad()
                }
            }}
            fakeKeys={1}
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
