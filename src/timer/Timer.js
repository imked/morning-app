import React, { useEffect, useReducer } from 'react'
import styled from 'styled-components'

import produce from 'immer'
import { formatCountDown } from './lib'

const Container = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  > h2 {
    color: #f4b16b;
    text-transform: uppercase;
  }
`

const Options = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: scale(${props => (props.visible ? '1' : '0')});
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in;
`

const RoundButton = styled('button')`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  color: #fefefe;
  align-items: center;
  border: none;
  border-radius: 75px;
  cursor: pointer;
  display: inline-flex;
  font-size: 30px;
  font-weight: 600;
  height: 80px;
  width: 80px;
  justify-content: center;
  margin: 10px;
  outline: none;
  transition-property: background-color;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
`

const Timer = styled('div')`
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  position: absolute;
  color: #f4b16b;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${props => (props.visible ? '1' : '0')});
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in;
`
const MODE = {
  DONE: 'DONE',
  INITIAL: 'INITIAL',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
}

const initialState = {
  countDown: null,
  mode: MODE.INITIAL,
  options: [5, 10, 15, 30, 46, 60],
}

const reducer = (state, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case 'END':
        draft.mode = MODE.DONE
        draft.countDown = null
        break
      case 'PAUSE':
        draft.mode = MODE.PAUSED
        break
      case 'PLAY':
        draft.mode = MODE.PLAYING
        break
      case 'RESET':
        return initialState
      case 'START_WITH':
        draft.mode = MODE.PLAYING
        draft.countDown = payload * 60
        break
      case 'TICK':
        draft.countDown -= 1
        break
      default:
    }
  })

export default function TaskTimer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { countDown, mode, options } = state

  useEffect(() => {
    if (mode === MODE.PLAYING) {
      const interval = setInterval(() => dispatch({ type: 'TICK' }), 1000)
      return () => clearTimeout(interval)
    }
  }, [mode])

  useEffect(() => {
    if (countDown === 0) {
      dispatch({ type: 'END' })
      setTimeout(() => dispatch({ type: 'RESET' }), 5000)
    }
  }, [countDown])

  return (
    <Container>
      <h2>Set your Timer!</h2>
      <Options visible={mode === MODE.INITIAL}>
        {options.map(option => (
          <RoundButton
            key={option}
            onClick={() => dispatch({ type: 'START_WITH', payload: option })}
          >
            {option}
          </RoundButton>
        ))}
      </Options>

      <Timer
        disabled={!countDown}
        onClick={() =>
          dispatch({ type: mode === MODE.PLAYING ? 'PAUSE' : 'PLAY' })
        }
        visible={mode === MODE.PLAYING || mode === MODE.PAUSED}
      >
        {countDown ? formatCountDown(countDown) : '?'}
      </Timer>
    </Container>
  )
}
