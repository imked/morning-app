import React, { useState } from 'react'
import Form from './Form'
import styled from 'styled-components'
import TaskList from './TaskList'

const Grid = styled.section`
  display: grid;
  grid-template-rows: 1fr 100px;
  align-content: top;
  justify-content: center;
`

export default function CreateTaskList() {
  const [tasks, setTasks] = useState([])

  function saveTask(taskText) {
    const trimmedText = taskText.trim()
    if (trimmedText.length > 0) {
      setTasks([...tasks, trimmedText])
    }
  }

  return (
    <Grid>
      <TaskList tasks={tasks} />
      <Form saveTask={saveTask} />
    </Grid>
  )
}
