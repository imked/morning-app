import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 20px, 20px;
`

export default function Form() {
  return (
    <StyledForm>
      <input type="text" placeholder="Insert tasks here" />
      <button>Add task!</button>
    </StyledForm>
  )
}
