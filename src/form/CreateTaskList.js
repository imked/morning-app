import React, { useState } from 'react'
import Form from './Form'
import styled from 'styled-components'
import TaskList from './TaskList'

const Grid = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 100px;
  align-content: top;
  justify-content: center;
  overflow-y: scroll;
`

export default function CreateTaskList({ cards, onSelect }) {
  const [tasks, setTasks] = useState([])

  function saveTask(taskText) {
    const trimmedText = taskText.trim()
    if (trimmedText.length > 0) {
      setTasks([...tasks, trimmedText])
    }
  }

  function deleteTask(index) {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)])
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
