import { createStore } from 'react-hooks-global-state'
import { reducerLogger } from './helpers/reducerLogger'
import { initialState } from './initialState'
import { reducer } from './reducer'

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
    reducerLogger(reducer),
    initialState
)
