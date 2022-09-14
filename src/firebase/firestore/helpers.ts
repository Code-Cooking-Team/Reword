import { DocumentData, DocumentReference, Query } from 'firebase/firestore'
import {
    ObservableStatus,
    ReactFireOptions,
    useFirestoreCollectionData,
    useFirestoreDocData,
} from 'reactfire'

const ID_FIELD = 'id'

export type WithId<T> = { [ID_FIELD]: string } & T

export const useFirestoreCollectionDataWithId = <T = DocumentData>(
    query: Query<T>,
    options?: ReactFireOptions<T[]>
) => {
    return useFirestoreCollectionData<T>(query, {
        idField: ID_FIELD,
        ...options,
    }) as ObservableStatus<WithId<T>[]>
}

export const useFirestoreDocDataWithId = <T = DocumentData>(
    query: DocumentReference<T>,
    options?: ReactFireOptions<T>
) => {
    return useFirestoreDocData<T>(query, {
        idField: ID_FIELD,
        ...options,
    }) as ObservableStatus<WithId<T>>
}
