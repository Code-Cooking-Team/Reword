export const fast = '0.3s cubic-bezier(.21,.96,.43,.98)'
export const slow = '0.8s cubic-bezier(.21,.96,.43,.98)'
export const now = '0.1s cubic-bezier(.21,.96,.43,.98)'
export const transition = (...args: string[]) => `transition:${args
    .map(name => `${name} ${fast}`)
    .join(',')};
`
