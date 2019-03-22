import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import DraggableList from './DraggableList'

const StyledDiv = styled.div`
  padding: 38px;
  width: 100%;
  overflow: hidden;
  user-select: none;
`

const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  align-items: center;
  border-radius: 4px;
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
  padding: -1px;
  height: 30px;
`

export default function TaskList({ cards, onSelect }) {
  return (
    <StyledDiv>
      <DraggableList
        items={cards
          .filter(card => card.isSelected)
          .map(card => (
            <StyledItem>
              <input type="checkbox" />
              <p>{card.title}</p>
              <StyledButton onClick={() => onSelect(card)}>
                <DeleteIcon />
              </StyledButton>
            </StyledItem>
          ))}
      />
    </StyledDiv>
  )
}
