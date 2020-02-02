import React from 'react'
import { Plus } from './Plus'
import { IconProps } from '../types'
import styled from 'styled-components'

export const Cross = (props: IconProps) => <RotatePlus {...props} />

const RotatePlus = styled(Plus)`
    transform: rotate(45deg);
`
