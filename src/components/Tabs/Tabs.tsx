import {
    Children,
    DependencyList,
    ReactElement,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react'
import styled, { css, keyframes } from 'styled-components'
import { TabsItemProps } from '.'
import { black, purple } from '../../styles/colors'
import { fast, transition } from '../../styles/transitions'

type TabsProps = {
    children: ReactElement<TabsItemProps>[] | ReactElement<TabsItemProps>
}

export const Tabs = (props: TabsProps) => {
    const items = Children.toArray(props.children) as ReactElement<TabsItemProps>[]

    const currentIndex = items.findIndex((el) => el.props.isActive)
    const [active, setActive] = useState(currentIndex > 0 ? currentIndex : 0)
    const [prevActive, setPrevActive] = useState<number>()

    const refNav = useRef(null)
    const refActive = useRef(null)

    const pos = useLinePosition(refNav, refActive, [active])

    const activeItem = items[active]
    const prevActiveItem = items[prevActive as any]

    return (
        <Container>
            <Nav ref={refNav}>
                {items.map((el, index) => (
                    <NavItem
                        ref={index === active ? refActive : null}
                        key={index}
                        onClick={() => {
                            if (active === index) return
                            setPrevActive(active)
                            setActive(index)
                        }}
                        active={index === active}
                    >
                        {el.props.name}
                    </NavItem>
                ))}
                <Line
                    style={{ transform: `translateX(${pos.left}px)`, width: pos.width }}
                />
            </Nav>
            <Content>
                {prevActiveItem && (
                    <ContentItem
                        animation={
                            prevActive && prevActive > active ? 'rightOut' : 'leftOut'
                        }
                        key={prevActiveItem.props.name}
                    >
                        <prevActiveItem.type {...prevActiveItem.props} />
                    </ContentItem>
                )}
                <ContentItem
                    animation={
                        prevActiveItem &&
                        (prevActive && prevActive < active ? 'rightIn' : 'leftIn')
                    }
                    key={activeItem.props.name}
                >
                    <activeItem.type {...activeItem.props} />
                </ContentItem>
            </Content>
        </Container>
    )
}

const Container = styled.div``
const Nav = styled.div`
    position: relative;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
`
const Content = styled.div`
    position: relative;
    overflow: hidden;
`

const rightOut = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`
const rightIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`
const leftOut = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
`
const leftIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`

const animations = {
    rightOut,
    rightIn,
    leftOut,
    leftIn,
}

const ContentItem = styled.div<{ animation?: keyof typeof animations }>`
    position: relative;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    ${(props) =>
        props.animation &&
        props.animation.endsWith('Out') &&
        css`
            position: absolute;
        `}
    ${(props) =>
        props.animation &&
        css`
            animation: ${animations[props.animation]} ${fast} forwards;
        `}
`

const Line = styled.div`
    height: 2px;
    ${transition('transform', 'width')}
    position: absolute;
    top: 100%;
    z-index: 10;
    background: ${purple};
`

const NavItem = styled.button<{ active: boolean }>`
    display: block;
    padding: 15px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: none;
    border: none;
    cursor: pointer;
    color: ${(p) => (p.active ? purple : black)};
`

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
