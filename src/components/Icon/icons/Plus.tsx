import React from 'react'
import { IconProps } from '../types'

export const Plus = ({ size, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
)
