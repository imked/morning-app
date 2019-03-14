import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'

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
  text-decoration: ${p => (p.active ? 'line-through' : null)};

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

export default function TaskList({
  tasks,
  cards,
  deleteTask,
  onSelect,
  onChangeCheck,
}) {
  return (
    <div>
      <StyledList>
        {tasks.map((task, index) => (
          <StyledItem key={index}>
            <input onChange={onChangeCheck} type="checkbox" />
            <p>{task.text}</p>
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
    </div>
  )
}
