import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useAuth } from 'reactfire'
import styled from 'styled-components'
import { Input } from '../../components/Input'
import { Tabs, TabsItem } from '../../components/Tabs'
import { dangerColor, purple, white } from '../../styles/colors'

export const AuthForm = () => {
    const auth = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
        <Container>
            <Tabs>
                <TabsItem name="Sign in">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            signInWithEmailAndPassword(auth, email, password).catch(
                                (rejected) => setError(rejected.message)
                            )
                        }}
                    >
                        <ContentWrapper>
                            <h2>I already have an account</h2>
                            <ErrorMessage>{error}</ErrorMessage>
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
                        onSubmit={(e) => {
                            e.preventDefault()
                            setError('')
                            createUserWithEmailAndPassword(auth, email, password).catch(
                                (rejected) => setError(rejected.message)
                            )
                        }}
                    >
                        <ContentWrapper>
                            <h2>Create an account</h2>
                            <ErrorMessage>{error}</ErrorMessage>
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
        </Container>
    )
}

const Container = styled.div`
    position: relative;
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
    background: ${purple};
`

const ErrorMessage = styled.div`
    color: ${dangerColor};
`
