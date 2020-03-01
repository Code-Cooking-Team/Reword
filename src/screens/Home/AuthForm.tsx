import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../components/Input'
import { Tabs, TabsItem } from '../../components/Tabs'
import { useAuthActions } from '../../store/useAuth'
import { brandColor, white, dangerColor } from '../../styles/colors'
import { FullLoading, Loading } from '../../components/Loading'

export const AuthForm = () => {
    const {
        signIn,
        signInError,
        createAccount,
        createAccountError,
        loading,
    } = useAuthActions()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
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
            {loading && (
                <Overlay>
                    <Loading />
                </Overlay>
            )}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
`

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
    background: ${brandColor};
`

const ErrorMessage = styled.div`
    color: ${dangerColor};
`
