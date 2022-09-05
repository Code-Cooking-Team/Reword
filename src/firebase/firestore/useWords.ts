import {
    addDoc,
    collection,
    CollectionReference,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import { useFirestore, useUser } from 'reactfire'
import { DBConst } from '../DBConst'
import { Word } from '../types/Word'
import { useFirestoreCollectionDataWithId } from './helpers'

export const useWordsCollectionRef = () => {
    const { data: user } = useUser()
    const firestore = useFirestore()

    return collection(
        firestore,
        DBConst.users,
        user!.uid,
        DBConst.words
    ) as CollectionReference<Word>
}

export const useWords = () => {
    const wordsRef = useWordsCollectionRef()
    const { data } = useFirestoreCollectionDataWithId<Word>(wordsRef)

    const randomWord = () => {
        return data[Math.floor(Math.random() * data.length)]
    }

    const removeWord = (id: string) => {
        return deleteDoc(doc(wordsRef, id))
    }

    const addWord = (word: Word) => {
        return addDoc(wordsRef, word)
    }

    return { words: data, randomWord, addWord, removeWord }
}
