import React from 'react'
import styled from 'styled-components'
import { Word } from '../../store/state/types/State'

type WordsItemProps = {
    word: Word
    removeWord: (id: string) => void
}

export const WordsItem = (props: WordsItemProps) => (
    <tr>
        <td>
            <b>{props.word.name}</b>
        </td>
        <td>
            <i>{props.word.translation}</i>
        </td>
        <td>{props.word.example && <small>{props.word.example}</small>}</td>
        <td>
            <button onClick={() => props.removeWord(props.word.id)}>x</button>
            {props.word.action}
        </td>
    </tr>
)
