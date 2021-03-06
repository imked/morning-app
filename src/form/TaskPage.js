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

export default function CreateTaskPage({ cards, onSelect, setCards }) {
  const [tasks, setTasks] = useState(getTasksFromStorage())

  useEffect(() => {
    saveTasksToStorage(tasks)
  }, [tasks])

  function addTask(value) {
    setTasks([...tasks, { content: value, isChecked: false }])
    console.log(tasks)
  }

  function deleteTask(taskIndex) {
    if (window.confirm('Are you sure?')) {
      const newTasks = tasks.filter((_, index) => index !== taskIndex)
      setTasks(newTasks)
    }
  }

  return (
    <Grid>
      <TaskList
        setCards={setCards}
        deleteTask={deleteTask}
        tasks={tasks}
        cards={cards}
        onSelect={onSelect}
        setTasks={setTasks}
      />
      <Form addTask={addTask} />
    </Grid>
  )
}
