import React from 'react'

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index.toString()}>
          <div>{task}</div>
        </li>
      ))}
    </ul>
  )
}
