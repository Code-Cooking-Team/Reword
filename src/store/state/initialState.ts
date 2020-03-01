import { RouteName } from '../types/RouteName'
import { State } from './types/State'

export const initialState: State = {
    route: RouteName.Game, // TODO
    lastRoutes: [],
    words: undefined,
    user: undefined,
}
