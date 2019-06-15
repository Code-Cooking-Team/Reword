import uuid from 'uuid'
import { Actions } from './types/Actions'
import { State, Word, WordAction } from './types/State'

export const reducer = (state: State, action: Actions) => {
    switch (action.type) {
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
            const newWord: Word = {
                id: `local-${uuid()}`,
                action: WordAction.Add,
                ...action.payload,
            }
            return {
                ...state,
                words: [...state.words, newWord],
            }

        case 'WORDS/REMOVE_WORD':
            return {
                ...state,
                words: state.words.map(word =>
                    word.id === action.payload.id
                        ? {
                              ...word,
                              action: WordAction.Delete,
                          }
                        : word
                ),
            }

        case 'USER/CHANGE':
            return {
                ...state,
                user: action.payload,
            }

        default:
            throw new Error('[reducer] Unknown action type!')
    }
}
