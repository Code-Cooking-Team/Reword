import {
    addDoc,
    collection,
    CollectionReference,
    deleteDoc,
    doc,
    updateDoc,
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

    const findWord = (wordName: string) => {
        return data.find((word) => word.name === wordName)
    }

    const addWord = (word: Word) => {
        return addDoc(wordsRef, word)
    }

    const removeWord = (id: string) => {
        return deleteDoc(doc(wordsRef, id))
    }

    const updateWord = (id: string, word: Word) => {
        return updateDoc(doc(wordsRef, id), word)
    }

    return { words: data, findWord, randomWord, addWord, updateWord, removeWord }
}
