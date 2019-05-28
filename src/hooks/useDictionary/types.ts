export type DictionaryItem = {
    id: string
    word: string
    trans: DictionaryTrans[]
}

export type DictionaryTrans = {
    gramGrp: string
    texts: string[]
}
