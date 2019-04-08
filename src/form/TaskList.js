import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '../images/deleteicon.png'

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
  grid-template-columns: 35px 1fr 45px;
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
  background: none;
  border: none;
  > * {
    height: 20px;
  }
`

export default function TaskList({
  setTasks,
  tasks,
  deleteTask,
  cards,
  onSelect,
  setCards,
}) {
  function handleTaskChecked(index) {
    setTasks([
      ...tasks.slice(0, index),
      { ...tasks[index], isChecked: !tasks[index].isChecked },
      ...tasks.slice(index + 1),
    ])
  }

  function handleCardChecked(index) {
    setCards([
      ...cards.slice(0, index),
      { ...cards[index], isChecked: !cards[index].isChecked },
      ...cards.slice(index + 1),
    ])
  }

  return (
    <StyledDiv>
      <StyledList>
        {tasks.map((task, index) => (
          <StyledItem key={index}>
            <input
              type="checkbox"
              checked={task.isChecked}
              name="content"
              onChange={() => handleTaskChecked(index)}
            />
            <p style={{ color: task.isChecked ? 'darkgrey' : null }}>
              {task.content}
            </p>
            <StyledButton
              onClick={() => {
                deleteTask(index)
              }}
            >
              <img src={DeleteIcon} alt="deleteIcon" />
            </StyledButton>
          </StyledItem>
        ))}
        {cards
          .filter(card => card.isSelected)
          .map((card, index) => (
            <StyledItem key={index}>
              <input
                type="checkbox"
                checked={card.isChecked}
                name="content"
                onChange={() => handleCardChecked(index)}
              />
              <p style={{ color: card.isChecked ? 'darkgrey' : null }}>
                {card.title}
              </p>
              <StyledButton onClick={() => onSelect(card)}>
                <img src={DeleteIcon} alt="deleteIcon" />
              </StyledButton>
            </StyledItem>
          ))}
      </StyledList>
    </StyledDiv>
  )
}
