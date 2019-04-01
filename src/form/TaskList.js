import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'

const StyledDiv = styled.div`
  padding: 38px;
  width: 100%;
  overflow: hidden;
  user-select: none;
`
const StyledList = styled.ul`
  list-style-type: none;
  justify-content: center;
  padding-inline-start: 0;
`

const StyledItem = styled.li`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  align-items: center;
  border-radius: 4px;
  margin: 0 0 5px;
  > * {
    padding: 0;
    margin: 0 5px;
  }
  > input {
    width: 25px;
  }
  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    text-transform: uppercase;
    color: white;
  }
`
const StyledButton = styled.button`
  height: 30px;
`

export default function TaskList({ tasks, deleteTask, cards, onSelect }) {
  return (
    <StyledDiv>
      <StyledList>
        {tasks.map((task, index) => (
          <StyledItem key={index}>
            <input type="checkbox" />
            <p>{task.content}</p>
            <StyledButton
              onClick={() => {
                deleteTask(index)
              }}
            >
              <DeleteIcon />
            </StyledButton>
          </StyledItem>
        ))}
        {cards
          .filter(card => card.isSelected)
          .map((card, index) => (
            <StyledItem key={index}>
              <input type="checkbox" />
              <p>{card.title}</p>
              <StyledButton onClick={() => onSelect(card)}>
                <DeleteIcon />
              </StyledButton>
            </StyledItem>
          ))}
      </StyledList>
    </StyledDiv>
  )
}
