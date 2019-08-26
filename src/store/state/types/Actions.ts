import { RouteName } from '../../types/RouteName'
import { WordsState, UserState, UnSavedWord } from './State'

type Action<T, P = never> = {
    type: T
    payload?: P
}

export type Actions =
    | Action<'ROUTER/SET_ROUTE', { route: RouteName }>
    | Action<'ROUTER/BACK'>
    | Action<'WORDS/SET', WordsState>
    | Action<'WORDS/ADD_WORD', UnSavedWord>
    | Action<'WORDS/ADD_MANY_WORDS', UnSavedWord[]>
    | Action<'WORDS/REMOVE_WORD', { id: string }>
    | Action<'USER/CHANGE', UserState | null>
