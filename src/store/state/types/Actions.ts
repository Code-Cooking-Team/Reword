import { RouteName } from '../../types/RouteName'
import { WordsState } from './State'

type Action<T, P = never> = {
    type: T
    payload?: P
}

export type Actions =
    | Action<'APP/SET_LOADING', boolean>
    | Action<'ROUTER/SET_ROUTE', { route: RouteName }>
    | Action<'ROUTER/BACK'>
    | Action<'WORDS/SET', WordsState>
    | Action<'WORDS/ADD_WORD', { name: string; translation: string; example?: string }>
    | Action<'WORDS/REMOVE_WORD', { id: string }>