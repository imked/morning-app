import { useState } from 'react'

export default initialValue => {
  const [tasks, setTasks] = useState(initialValue)

  return {
    tasks,
    addTask: taskText => {
      setTasks([...tasks, taskText])
    },
    deleteTask: taskIndex => {
      const newTasks = tasks.filter((_, index) => index !== taskIndex)

      setTasks(newTasks)
    },
  }
}
