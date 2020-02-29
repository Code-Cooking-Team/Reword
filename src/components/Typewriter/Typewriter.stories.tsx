import { withKnobs, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Typewriter } from './Typewriter'

storiesOf('Typewriter', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <Center>{story()}</Center>)
    .add('default', () => (
        <div>
            <Typewriter word="Home" progress={3} />
            <Typewriter word={text('word', 'Hello')} progress={number('progress', 3)} />
            <Typewriter word="Homeworks" progress={4} />
            <Typewriter word="Simply the best" progress={8} />
            <Typewriter word="Simply the best and unique one" progress={8} />
        </div>
    ))
    .add('start', () => (
        <Typewriter word={text('word', 'Hello')} progress={number('progress', 0)} />
    ))
    .add('full', () => (
        <Typewriter word={text('word', 'Hello')} progress={number('progress', 5)} />
    ))

const Center = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
