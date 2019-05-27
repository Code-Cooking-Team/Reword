import styled from 'styled-components'
import { useRouter } from '../../store'
import { RouteName } from '../../store/types/RouteName'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import React, { useState } from 'react'
import { firebaseApp } from '../../store/firebase'

export const Settings = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setRoute } = useRouter()
    return (
        <div>
            <Header title="Settings" iconName="profile" />

            <form
                onSubmit={e => {
                    e.preventDefault()
                    firebaseApp
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .catch(m => console.log(m))
                }}
            >
                <Input
                    name="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="email"
                />
                <Input
                    name="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="password"
                />
                <button>Sign up</button>
            </form>
        </div>
    )
}
