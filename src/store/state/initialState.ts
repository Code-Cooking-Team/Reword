import { RouteName } from '../types/RouteName'
import { State } from './types/State'

export const initialState: State = {
    loading: true,
    route: RouteName.Home,
    lastRoutes: [],
    words: [],
    user: null,
}
