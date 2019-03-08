import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 20px, 20px;
  margin: 30px;
  grid-gap: 10px;

  > button {
    margin: 0 80px;
    border-radius: 10px;
    background: #f4b16b;
    border: #f4b16b;
    color: #fff;
  }

  > input {
    border-radius: 10px;
    border: 1px solid #f4b16b;
    padding: 5px 10px;
  }
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
      <input
        value={value}
        onChange={onChange}
        name="task"
        type="text"
        placeholder="Insert tasks here"
      />
      <button>Add task!</button>
    </StyledForm>
  )
}
