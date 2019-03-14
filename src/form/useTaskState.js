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
    onChangeCheck: task => {
      const index = tasks.indexOf(task)
      setTasks([
        ...tasks.slice(0, index),
        { ...task, checked: !task.checked },
        ...tasks.slice(index + 1),
      ])
      console.log(tasks)
    },
  }
}
