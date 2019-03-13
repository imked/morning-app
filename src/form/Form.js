import React from 'react'
import styled from 'styled-components'
import useInputState from './useInputState'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
`
const StyledInput = styled.input`
  margin: 10px 15px 0;
`
const StyledButton = styled.button`
  margin: 0 40px 20px;
  background: #f4b16b;
  border: #f4b16b;
  border-radius: 4px;
  color: #fff;
`

export default function Form({ saveTask }) {
  const { value, reset, onChange } = useInputState('')

  function onSubmit(event) {
    event.preventDefault()
    saveTask(value)
    reset('')
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        onChange={onChange}
        name="task"
        type="text"
        placeholder="Insert tasks here"
      />
      <StyledButton>Add task!</StyledButton>
    </StyledForm>
  )
}
