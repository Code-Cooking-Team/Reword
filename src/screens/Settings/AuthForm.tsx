import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Tabs, TabsItem } from '../../components/Tabs'
import { useAuthActions } from '../../store/useAuth'

export const AuthForm = () => {
    const { logIn, createAccount } = useAuthActions()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Tabs>
            <TabsItem name="Sign up">
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        logIn(email, password)
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
                        createAccount(email, password)
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
    )
}

const FormWrapper = styled.div`
    padding: 30px;
`
