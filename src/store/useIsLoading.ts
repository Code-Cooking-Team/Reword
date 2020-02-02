import { useGlobalState } from './state/store'

export const useIsLoading = () => {
    const [words] = useGlobalState('words')
    const [user] = useGlobalState('user')

    return {
        isLoading: words === undefined || user === undefined,
        loggedIn: !!user,
    }
}
