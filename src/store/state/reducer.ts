import uuid from 'uuid'
import { Actions } from './types/Actions'
import { State } from './types/State'

export const reducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'APP/SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }

        case 'ROUTER/SET_ROUTE':
            return {
                ...state,
                route: action.payload.route,
                lastRoutes: [state.route, ...state.lastRoutes],
            }

        case 'ROUTER/BACK':
            return {
                ...state,
                route: state.lastRoutes[0],
                lastRoutes: state.lastRoutes.slice(1),
            }

        case 'WORDS/SET':
            return {
                ...state,
                words: action.payload,
            }

        case 'WORDS/ADD_WORD':
            return {
                ...state,
                words: [...state.words, { id: uuid(), ...action.payload }],
            }

        case 'WORDS/REMOVE_WORD':
            return {
                ...state,
                words: state.words.filter(word => word.id !== action.payload.id),
            }

        default:
            throw new Error('[reducer] Unknown action type!')
    }
}
