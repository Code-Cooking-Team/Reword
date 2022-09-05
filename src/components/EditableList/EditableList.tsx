import styled from 'styled-components'
import { purple } from '../../styles/colors'
import { Icon } from '../Icon'

type EditableListProps = {
    list: string[]
    onChange: (list: string[]) => void
}
export const EditableList = ({ list, onChange }: EditableListProps) => (
    <>
        {list.map((item, index) => (
            <ListElement key={index}>
                {item}
                <Cross
                    onClick={() => {
                        onChange(remove(list, index))
                    }}
                >
                    <Icon name="Cross" size="normal" />
                </Cross>
            </ListElement>
        ))}
    </>
)

const remove = (list: string[], index: number) => list.filter((el, i) => index !== i)

const reorder = (list: string[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

const List = styled.div``
const ListElement = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`
const Cross = styled.button`
    border: none;
    padding: 4px;
    width: 32px;
    color: ${purple};
    background: none;
`
