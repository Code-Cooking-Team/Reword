import { createContext } from 'react'
import { Config, defaultConfig } from './Config'

export const ConfigContext = createContext<
    | {
          config: Config
          setConfig: (config: Partial<Config>) => void
      }
    | undefined
>(undefined)
