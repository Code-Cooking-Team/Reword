import { useEffect } from 'react'

export const useDebounce = (fn: () => any, ms: number = 0, args: any[] = []) => {
    useEffect(() => {
        const handle = setTimeout(fn.bind(null, args), ms)

        return () => {
            clearTimeout(handle)
        }
    }, [args, fn, ms])
}
