import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

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

export default function TaskList({ tasks, cards, deleteTask }) {
  return (
    <div>
      <StyledList>
        {tasks.map((task, index) => (
          <StyledItem key={index.toString()}>
            {task}
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTask(index)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </StyledItem>
        ))}
        {cards
          .filter(card => card.isSelected)
          .map((card, index) => (
            <StyledItem key={index.toString()}>{card.title}</StyledItem>
          ))}
      </StyledList>
    </div>
  )
}
