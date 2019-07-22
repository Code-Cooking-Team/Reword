import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { firebaseApp } from '../../store/firebase'
import { useGlobalState } from '../../store/state/store'
import { useIsLoading } from '../../store/useIsLoading'
import { Tabs, TabsItem } from '../../components/Tabs'

export const Settings = () => {
    const isLoading = useIsLoading()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user] = useGlobalState('user')

    if (isLoading) {
        return (
            <div>
                <Header title="Settings" iconName="profile" />
                <p>Loading…</p>
            </div>
        )
    }

    return (
        <div>
            <Header title="Settings" iconName="profile" />
            {!user ? (
                <Tabs>
                    <TabsItem name="Login In">
                        <form
                            onSubmit={e => {
                                e.preventDefault()
                                firebaseApp
                                    .auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .catch(m => console.log(m))
                            }}
                        >
                            <FormWrapper>
                                <h2>Create an account</h2>
                                <Input
                                    name="email"
                                    value={email}
                                    onChange={setEmail}
                                    placeholder="email"
                                />
                                <Input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={setPassword}
                                    placeholder="password"
                                />
                                <Button>Sign up</Button>
                            </FormWrapper>
                        </form>
                    </TabsItem>
                    <TabsItem name="Sing in">
                        <form
                            onSubmit={e => {
                                e.preventDefault()
                                firebaseApp
                                    .auth()
                                    .signInWithEmailAndPassword(email, password)
                                    .catch(m => console.log(m))
                            }}
                        >
                            <FormWrapper>
                                <h2>I already have an account</h2>
                                <Input
                                    name="email"
                                    value={email}
                                    onChange={setEmail}
                                    placeholder="email"
                                />
                                <Input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={setPassword}
                                    placeholder="password"
                                />
                                <Button>Sign in</Button>
                            </FormWrapper>
                        </form>
                    </TabsItem>
                </Tabs>
            ) : (
                <Button
                    type="button"
                    onClick={() => {
                        firebaseApp.auth().signOut()
                    }}
                >
                    Sign out
                </Button>
            )}
        </div>
    )
}

const FormWrapper = styled.div`
    padding: 30px;
`
