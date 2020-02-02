import React from 'react'
import { IconProps } from '../types'

export const Search = ({ size, ...props }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.731 14.255H16.521L21.511 19.255L20.021 20.745L15.021 15.755V14.965L14.751 14.685C13.611 15.665 12.131 16.255 10.521 16.255C6.931 16.255 4.021 13.345 4.021 9.755C4.021 6.165 6.931 3.255 10.521 3.255C14.111 3.255 17.021 6.165 17.021 9.755C17.021 11.365 16.431 12.845 15.451 13.985L15.731 14.255ZM6.021 9.755C6.021 12.245 8.031 14.255 10.521 14.255C13.011 14.255 15.021 12.245 15.021 9.755C15.021 7.26501 13.011 5.255 10.521 5.255C8.031 5.255 6.021 7.26501 6.021 9.755Z"
            fill="black"
            fillOpacity="0.54"
        />
    </svg>
)