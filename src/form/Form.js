import React from 'react'
import styled from 'styled-components'
import useInputState from './useInputState'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  font-size: 16px;
`

const StyledButton = styled.button`
  background: #f4b16b;
  border: #f4b16b;
  border-radius: 4px;
  color: #fff;
  height: 38px;
`

export default function Form({ addTask }) {
  const { value, reset, onChange } = useInputState('')

  function onSubmit(event) {
    event.preventDefault()
    addTask(value)
    reset('')
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        name="task"
        type="text"
        placeholder="Insert tasks here"
      />
      <StyledButton>Add task!</StyledButton>
    </StyledForm>
  )
}
