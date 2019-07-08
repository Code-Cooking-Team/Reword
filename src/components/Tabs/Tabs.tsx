import React, {
    RefObject,
    DependencyList,
    useState,
    useEffect,
    ReactNode,
    Children,
    ReactElement,
    useRef,
} from 'react'
import styled from 'styled-components'
import { TabsItemProps } from '.'

// <Tabs tabColor={"blue"}>
//     <tabsEl tabName="ALE MA KOTA" active>

//     </tabsEl>
//     <tabsEl tabName="">

//     </tabsEl>
// </Tabs>

type TabsProps = {
    children: ReactElement<TabsItemProps>[] | ReactElement<TabsItemProps>
}

export const Tabs = (props: TabsProps) => {
    const items = Children.toArray<ReactElement<TabsItemProps>>(props.children)

    const currentIndex = items.findIndex(el => el.props.isActive)
    const [active, setActive] = useState(currentIndex || 0)
    const [prevActive, setPrevActive] = useState(active)

    const refNav = useRef(null)
    const refActive = useRef(null)

    const pos = useLinePosition(refNav, refActive, [active])

    const prevActiveItem = items[prevActive]
    const activeItem = items[active]

    return (
        <Container>
            <Nav ref={refNav}>
                {items.map((el, index) => (
                    <button
                        ref={index === active ? refActive : null}
                        key={index}
                        onClick={() => {
                            setPrevActive(active)
                            setActive(index)
                        }}
                    >
                        {el.props.name}
                    </button>
                ))}
                <Line>{pos.left}</Line>
            </Nav>
            <Content>
                <prevActiveItem.type {...prevActiveItem.props} />
                <activeItem.type {...activeItem.props} />
            </Content>
        </Container>
    )
}

const Container = styled.div``
const Nav = styled.div``
const Content = styled.div``
const Line = styled.div``

const useLinePosition = (
    wrapperEl: RefObject<HTMLElement>,
    activeEl: RefObject<HTMLElement>,
    deps: DependencyList
) => {
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(0)
    // const { innerWidth } = useWindowSize();

    useEffect(() => {
        if (!activeEl.current || !wrapperEl.current) {
            return
        }
        const activeRect = activeEl.current.getBoundingClientRect()
        const wrapperRect = wrapperEl.current.getBoundingClientRect()

        setLeft(activeRect.left - wrapperRect.left)
        setWidth(activeRect.width)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...deps, activeEl, wrapperEl])
    // [...deps, innerWidth]
    return { left, width }
}
