import React from 'react'
import Form from './Form'
import styled from 'styled-components'
import TaskList from './TaskList'
import useTaskState from './useTaskState'

const Grid = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 100px;
  align-content: top;
  justify-content: center;
  overflow-y: scroll;
`

export default function CreateTaskPage({ cards, onSelect }) {
  const { tasks, addTask, deleteTask } = useTaskState([])

  return (
    <Grid>
      <TaskList
        tasks={tasks}
        cards={cards}
        onSelect={onSelect}
        deleteTask={deleteTask}
      />
      <Form addTask={addTask} />
    </Grid>
  )
}
