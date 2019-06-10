import styled from 'styled-components'
import { useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import React, { useState, useEffect } from 'react'
import { firebaseApp } from '../../store/firebase'
import { Button } from '../../components/Button'
import { useGlobalState } from '../../store/state/store'

export const Settings = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user] = useGlobalState('user')

    console.log(user)

    return (
        <div>
            <Header title="Settings" iconName="profile" />
            {!user ? (
                <>
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
                </>
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
