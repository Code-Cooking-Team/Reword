import { Actions } from '../types/Actions'
import { State } from '../types/State'
import { reducer } from '../reducer'

export const reducerLogger = (reducerFunc: typeof reducer) => (
    state: State,
    action: Actions
) => {
    console.log('→', action.type, action.payload)
    return reducerFunc(state, action)
}
