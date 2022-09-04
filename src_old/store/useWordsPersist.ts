import { dispatch, useGlobalState } from './state/store'
import { useEffect, useState } from 'react'
import { firebaseApp } from './firebase'
import { Word, WordAction } from './state/types/State'

export const useWordsPersist = () => {
    const [user] = useGlobalState('user')
    const [localWords] = useGlobalState('words')

    useEffect(() => {
        // Waiting for user status…
        if (user === undefined) return

        // User is logged out
        if (user === null) {
            dispatch({ type: 'WORDS/SET', payload: [] })
            return
        }

        // Listen on words updates
        const unsubscribe = firebaseApp
            .firestore()
            .collection('users')
            .doc(user.id)
            .collection('words')
            .onSnapshot(snapshot => {
                const serverWords: Word[] = []

                snapshot.forEach(doc => {
                    const data = doc.data()
                    serverWords.push({
                        id: doc.id,
                        name: data.name,
                        translation: data.translation,
                        example: data.example,
                    })
                })

                dispatch({ type: 'WORDS/SET', payload: serverWords })
            })

        return unsubscribe
    }, [user])

    // This one react only when words are changed (action field in Word)
    useEffect(() => {
        if (!localWords) return

        const wordToAdd = localWords.filter(w => w.action === WordAction.Add)
        const wordToDelete = localWords.filter(w => w.action === WordAction.Delete)

        if ((!wordToAdd && !wordToDelete) || !user) return

        const wordsFirebaseRef = firebaseApp
            .firestore()
            .collection('users')
            .doc(user.id)
            .collection('words')

        wordToAdd.forEach(word => {
            const newWord: Word = { ...word }
            // Very important one, without this we will have infinite loop :O
            delete newWord.action
            delete newWord.id // Also we can remove local ID

            wordsFirebaseRef.add(newWord)
        })

        wordToDelete.forEach(word => {
            wordsFirebaseRef.doc(word.id).delete()
        })
    }, [localWords, user])
}
