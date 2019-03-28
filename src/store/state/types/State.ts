import { RouteName } from '../../types/RouteName'

export type Word = {
    id: string
    name: string
    translation: string
    example?: string
}

export type WordsState = Word[]

export type State = {
    route: RouteName
    words: WordsState
}
