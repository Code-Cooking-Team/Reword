import { RouteName } from '../../types/RouteName'

type Action<T, P> = {
    type: T
    payload: P
}

export type Actions =
    | Action<'ROUTER/SET_ROUTE', { route: RouteName }>
    | Action<'WORDS/ADD_WORD', { word: string }>
    | Action<'WORDS/REMOVE_WORD', { id: string }>
