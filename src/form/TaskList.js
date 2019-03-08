import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: none;
  justify-content: center;
  padding-inline-start: 0;
`
const StyledItem = styled.li`
  border-radius: 10px;
  border: 1px solid #f4b16b;
  padding: 5px 10px;
  margin: 0 15px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 260px;
`

export default function TaskList({ tasks }) {
  return (
    <StyledList>
      {tasks.map((task, index) => (
        <StyledItem key={index.toString()}>{task}</StyledItem>
      ))}
    </StyledList>
  )
}
