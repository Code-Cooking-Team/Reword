import { UnSavedWord } from '../state/types/State'

type Preset = {
    id: string
    name: string
    getList(): Promise<UnSavedWord[]>
}

export const presets: Preset[] = [
    {
        id: 'basic-weekdays',
        name: 'Weekdays',
        getList: () =>
            import('./base/weekdays').then(({ list }) =>
                list.map(el => ({ ...el, preset: 'basic-weekdays' }))
            ),
    },
]
