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

export default function CreateTaskList({ cards, onSelect }) {
  const { tasks, addTask, deleteTask } = useTaskState([])

  function saveTask(text) {
    const trimmedText = text.trim()
    if (trimmedText.length > 0) {
      addTask(trimmedText)
    }
  }

  return (
    <Grid>
      <TaskList
        tasks={tasks}
        cards={cards}
        onSelect={onSelect}
        deleteTask={deleteTask}
      />
      <Form saveTask={saveTask} />
    </Grid>
  )
}
