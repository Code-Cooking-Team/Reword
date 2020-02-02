import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { useGlobalState } from '../../store/state/store'
import { useAuthActions } from '../../store/useAuth'
import { useIsLoading } from '../../store/useIsLoading'
import { AuthForm } from './AuthForm'

export const Settings = () => {
    const isLoading = useIsLoading()
    const { logOut } = useAuthActions()
    const [user] = useGlobalState('user')

    if (isLoading) {
        return (
            <div>
                <Header title="Settings" iconName="Profile" />
                <p>Loading…</p>
            </div>
        )
    }

    return (
        <div>
            <Header title="Settings" iconName="Profile" />
            {!user ? (
                <AuthForm />
            ) : (
                <Button type="button" onClick={() => logOut()}>
                    Sign out
                </Button>
            )}
        </div>
    )
}
