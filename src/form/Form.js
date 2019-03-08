import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 20px, 20px;
  margin: 30px;
  grid-gap: 10px;
`
const StyledInput = styled.input`
  border-radius: 10px;
  border: 1px solid #f4b16b;
  padding: 5px 10px;
`
const StyledButton = styled.button`
  margin: 0 80px;
  border-radius: 10px;
  background: #f4b16b;
  border: #f4b16b;
  color: #fff;
`

export default function Form({ saveTask }) {
  const [value, setValue] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    saveTask(value)
  }

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
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
