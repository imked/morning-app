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
  align-items: center;
  border: none;
  border-radius: 75px;

  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: inline-flex;
  font-size: 40px;
  font-weight: 700;
  height: 100px;
  justify-content: center;
  margin: 10px;
  outline: none;
  transition-property: background-color, box-shadow;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  width: 100px;
  :hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  }
  :active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`

const Timer = styled('div')`
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  position: absolute;
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
  options: [60, 45, 30, 15, 5],
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
