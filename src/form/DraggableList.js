import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useGesture } from 'react-with-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
  width: 286px;

  > div {
    position: absolute;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    border-radius: 5px;
  }
  > div:nth-child(1) {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }
  > div:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  > div:nth-child(3) {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  }
  > div:nth-child(4) {
    background: linear-gradient(135deg, #dcf956 0%, #7ef75f 100%);
  }
  > div:nth-child(5) {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }
  > div:nth-child(6) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  > div:nth-child(7) {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  }
  > div:nth-child(8) {
    background: linear-gradient(135deg, #dcf956 0%, #7ef75f 100%);
  }
`

const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? {
        y: curIndex * 50 + y,
        scale: 1.1,
        zIndex: '1',
        shadow: 15,
        immediate: n => n === 'y' || n === 'zIndex',
      }
    : {
        y: order.indexOf(index) * 50,
        scale: 1,
        zIndex: '0',
        shadow: 1,
        immediate: false,
      }

export default function DraggableList({ items }) {
  const order = useRef(items.map((_, index) => index))

  const [springs, setSprings] = useSprings(items.length, fn(order.current))

  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    )
    const newOrder = swap(order.current, curIndex, curRow)
    setSprings(fn(newOrder, down, originalIndex, curIndex, y))
    if (!down) order.current = newOrder
  })
  return (
    <StyledDiv style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(
              s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            transform: interpolate(
              [y, scale],
              (y, s) => `translate3d(0,${y}px,0) scale(${s})`
            ),
          }}
          children={items[i]}
        />
      ))}
    </StyledDiv>
  )
}
