import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type TabsItemProps = {
    name: string
    isActive?: boolean
    children: ReactNode
}

export const TabsItem = (props: TabsItemProps) => <Container>{props.children}</Container>

const Container = styled.div``
