import { RouteName } from '../../types/RouteName'

export type Word = {
    id: string
    name: string
    translation: string
    example?: string
}

export type WordsState = Word[]

export type UserState = {
    id: string
    email: string
    name: string
}

export type State = {
    loading: boolean
    route: RouteName
    lastRoutes: RouteName[]
    words: WordsState
    user: UserState | null
}
