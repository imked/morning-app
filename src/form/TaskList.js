import React from 'react'
import styled from 'styled-components'

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
    color: #fefefe;
  }

  > div {
    color: #fefefe;
    font-size: 24px;
  }
`
const StyledButton = styled.button`
  height: 30px;
  background: none;
  border: none;
  > * {
    height: 20px;
    color: #fefefe;
    font-size: 18px;
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
        {cards
          .filter(card => card.isSelected)
          .map((card, index) => (
            <StyledItem key={index}>
              <div name="content" onClick={() => handleCardChecked(index)}>
                {card.isChecked ? (
                  <i className="far fa-check-square" />
                ) : (
                  <i className="far fa-square" />
                )}
              </div>
              <p
                style={{
                  textDecoration: card.isChecked ? 'line-through' : null,
                }}
              >
                {card.title}
              </p>
              <StyledButton onClick={() => onSelect(card)}>
                <i class="far fa-trash-alt" />
              </StyledButton>
            </StyledItem>
          ))}
        {tasks.map((task, index) => (
          <StyledItem key={index}>
            <div name="content" onClick={() => handleTaskChecked(index)}>
              {task.isChecked ? (
                <i className="far fa-check-square" />
              ) : (
                <i className="far fa-square" />
              )}
            </div>
            <p
              style={{ textDecoration: task.isChecked ? 'line-through' : null }}
            >
              {task.content}
            </p>
            <StyledButton
              onClick={() => {
                deleteTask(index)
              }}
            >
              <i className="far fa-trash-alt" />
            </StyledButton>
          </StyledItem>
        ))}
      </StyledList>
    </StyledDiv>
  )
}
