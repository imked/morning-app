import React from 'react'
import Form from './Form'
import styled from 'styled-components'
import TaskList from './TaskList'

const Grid = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 150px;
  align-content: top;
  justify-content: center;
  overflow-y: scroll;
`

export default function CreateTaskPage({ addTask, cards, onSelect }) {
  return (
    <Grid>
      <TaskList tasks={cards.title} cards={cards} onSelect={onSelect} />
      <Form addTask={addTask} />
    </Grid>
  )
}
