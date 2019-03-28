import { dispatch, useGlobalState } from './state/store'
import { RouteName } from './types/RouteName'

export const useRouter = () => {
    const [route] = useGlobalState('route')

    const setRoute = (route: RouteName) => {
        dispatch({ type: 'ROUTER/SET_ROUTE', payload: { route } })
    }

    return { route, setRoute }
}
