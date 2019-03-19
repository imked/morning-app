import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import { uid } from 'react-uid'

const StyledList = styled.ul`
  list-style-type: none;
  justify-content: center;
  padding-inline-start: 0;
`
const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  border-radius: 4px;
  border: 1px solid #f4b16b;
  padding: 5px 10px;
  margin: 0 15px;
  width: 250px;
  margin: 5px;

  width: 260px;
  > p {
    margin: 0 2px;
    padding: 5px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > input {
    margin: 5px 5px 0;
  }
`

const StyledButton = styled.button`
  background-color: white;
  border-color: white;
  padding: 0;
`

export default function TaskList({ tasks, cards, deleteTask, onSelect }) {
  return (
    <div>
      <StyledList>
        {tasks.map((task, index) => (
          <StyledItem key={uid(index)}>
            <input type="checkbox" />
            <p>{task}</p>
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
            <StyledItem key={uid(index)}>
              <input type="checkbox" />
              <p>{card.title}</p>
              <StyledButton onClick={() => onSelect(card)}>
                <DeleteIcon />
              </StyledButton>
            </StyledItem>
          ))}
      </StyledList>
    </div>
  )
}
