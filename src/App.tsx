import { useSigninCheck } from 'reactfire'
import { Routing } from './Routing'
import { AuthScreen } from './screens/Auth/AuthScreen'

export const App = () => {
    const { data: signInCheckResult } = useSigninCheck()

    if (!signInCheckResult.signedIn) {
        return <AuthScreen />
    }

    return <Routing />
}
