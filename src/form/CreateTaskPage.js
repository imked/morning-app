import React, { useState, useEffect } from 'react'
import Form from './Form'
import styled from 'styled-components'
import TaskList from './TaskList'
import { getTasksFromStorage, saveTasksToStorage } from '../services'

const Grid = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr 150px;
  align-content: top;
  justify-content: center;
  overflow-y: scroll;
`

export default function CreateTaskPage({ cards, onSelect }) {
  const [tasks, setTasks] = useState(getTasksFromStorage())

  useEffect(() => {
    saveTasksToStorage(tasks)
  }, [tasks])

  function addTask(value) {
    setTasks([...tasks, { content: value }])
  }

  function deleteTask(taskIndex) {
    const newTasks = tasks.filter((_, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <Grid>
      <TaskList
        deleteTask={deleteTask}
        tasks={tasks}
        cards={cards}
        onSelect={onSelect}
      />
      <Form addTask={addTask} />
    </Grid>
  )
}
