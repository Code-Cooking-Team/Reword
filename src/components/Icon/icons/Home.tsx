import { IconProps } from '../types'

export const Home = ({ size, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 12.5H2L12 3.5L22 12.5H19V20.5H13V14.5H11V20.5H5V12.5ZM17 10.69L12 6.19L7 10.69V18.5H9V12.5H15V18.5H17V10.69Z"
        />
    </svg>
)
