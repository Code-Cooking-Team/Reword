import { DocumentData, DocumentReference, Query } from 'firebase/firestore'
import {
    ObservableStatus,
    ReactFireOptions,
    useFirestoreCollectionData,
    useFirestoreDocData,
} from 'reactfire'

export type WithId<T> = { id: string } & T

export const useFirestoreCollectionDataWithId = <T = DocumentData>(
    query: Query<T>,
    options?: ReactFireOptions<T[]>
) => {
    return useFirestoreCollectionData<T>(query, {
        idField: 'id',
        ...options,
    }) as ObservableStatus<WithId<T>[]>
}

export const useFirestoreDocDataWithId = <T = DocumentData>(
    query: DocumentReference<T>,
    options?: ReactFireOptions<T>
) => {
    return useFirestoreDocData<T>(query, {
        idField: 'id',
        ...options,
    }) as ObservableStatus<WithId<T>>
}
