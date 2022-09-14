import { collection, CollectionReference } from 'firebase/firestore'
import { useFirestore, useUser } from 'reactfire'
import { DBConst } from '../DBConst'
import { Word } from '../types/Word'

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
