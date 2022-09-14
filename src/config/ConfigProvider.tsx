import { PropsWithChildren, useCallback, useMemo } from 'react'
import { useLocalStorage } from 'react-use'
import { Config, defaultConfig } from './Config'
import { ConfigContext } from './ConfigContext'

export const ConfigProvider = ({ children }: PropsWithChildren) => {
    const [local, setLocal] = useLocalStorage<Partial<Config>>('config')

    const setConfig = useCallback((config: Partial<Config>) => {
        setLocal((current) => ({
            ...current,
            ...config,
        }))
    }, [])

    const config = useMemo(
        () => ({
            ...defaultConfig,
            ...local,
        }),
        [local]
    )

    return (
        <ConfigContext.Provider value={{ config, setConfig }}>
            {children}
        </ConfigContext.Provider>
    )
}
