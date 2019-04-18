import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  font-size: 16px;
  color: #f4b16b;
  > input {
    padding-left: 10px;
    border: 2px solid #f4b16b;
    ::placeholder {
      color: #f4b16b;
    }
  }
`

const StyledButton = styled.button`
  background: #f4b16b;
  border: #f4b16b;
  border-radius: 4px;
  color: #fff;
  height: 38px;
  font-size: 16px;
`

export default function Form({ addTask }) {
  const [value, setValue] = useState('')

  function onChange(event) {
    setValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!value) return
    addTask(value)
    setValue('')
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={onChange}
        name="task"
        type="text"
        placeholder="Insert tasks here!"
      />
      <StyledButton>Add task!</StyledButton>
    </StyledForm>
  )
}
