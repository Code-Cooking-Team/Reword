import { useEffect, useState } from 'react'

export const useElementSize = (el: HTMLElement | null = document.body) => {
    const [size, setSize] = useState(() => getSize(el))

    useEffect(() => {
        const handleResize = () => {
            setSize(getSize(el))
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [el])

    return size
}

const getSize = (el: HTMLElement | null) => {
    if (!el) {
        return { width: 0, height: 0 }
    }
    const { width, height } = el.getBoundingClientRect()
    return { width, height }
}
