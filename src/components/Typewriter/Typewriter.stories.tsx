import { withKnobs, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Typewriter } from './Typewriter'
import { ExampleSentence } from './ExampleSentence'

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
    .add('example sentence', () => (
        <div>
            <ExampleSentence sentence="We barely hear you" hiddenWord="Barely" />
            <ExampleSentence sentence="We barely hear you" hiddenWord="Barely" showWord />
            <ExampleSentence
                sentence="You are capable of distinguishing reality from fantasy"
                hiddenWord="distinguish"
            />
            <ExampleSentence
                sentence="You are capable of distinguishing reality from fantasy"
                hiddenWord="distinguish"
                showWord
            />
        </div>
    ))

const Center = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
