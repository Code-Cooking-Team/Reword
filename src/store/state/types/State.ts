import { RouteName } from '../../types/RouteName'

type Word = {
    id: string
    name: string
}

export type WordsState = Word[]

export type State = {
    route: RouteName
    words: WordsState
}
