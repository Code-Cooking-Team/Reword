import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../components/Input'
import { Tabs, TabsItem } from '../../components/Tabs'
import { useAuthActions } from '../../store/useAuth'
import { brand, white, danger } from '../../styles/colors'

export const AuthForm = () => {
    const { signIn, signInError, createAccount, createAccountError } = useAuthActions()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Tabs>
            <TabsItem name="Sign in">
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        signIn(email, password)
                    }}
                >
                    <ContentWrapper>
                        <h2>I already have an account</h2>
                        <ErrorMessage>{signInError}</ErrorMessage>
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
                    </ContentWrapper>
                    <FullButton>Sign in</FullButton>
                </form>
            </TabsItem>
            <TabsItem name="Sing up">
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        createAccount(email, password)
                    }}
                >
                    <ContentWrapper>
                        <h2>Create an account</h2>
                        <ErrorMessage>{createAccountError}</ErrorMessage>
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
                    </ContentWrapper>
                    <FullButton>Sign up</FullButton>
                </form>
            </TabsItem>
        </Tabs>
    )
}

const ContentWrapper = styled.div`
    padding: 40px 30px;
`

const FullButton = styled.button`
    display: block;
    width: 100%;
    text-align: center;
    color: ${white};
    font-weight: bold;
    padding: 18px 0;
    border: none;
    background: ${brand};
`

const ErrorMessage = styled.div`
    color: ${danger};
`
