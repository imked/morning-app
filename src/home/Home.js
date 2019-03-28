import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const greetings = [
  { content: 'Good morning!' },
  { content: 'Guten Morgen!' },
  { content: 'Bonjour!' },
  { content: 'Kaliméra!' },
  { content: 'Namaste!' },
  { content: 'Bom dia!' },
  { content: 'Buenos días!' },
  { content: 'Buongiorno!' },
  { content: 'Günaydın!' },
]

const Container = styled.section`
  display: grid;
  grid-template-rows: 70px 30px;
  align-content: center;
  justify-content: center;
`

const Text = styled.div`
  width: 286px;
  height: 38px;
  color: #f4b16b;
  text-align: center;
`

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: #f4b16b;
  color: white;
  font-size: 16px;
`

export default function Home({ onClick, homeButton }) {
  const [data, setData] = useState(greetings)

  function newGreeting() {
    const number = Math.floor(Math.random() * 9)
    const greeting = greetings[number].content
    setData({ content: greeting })
  }

  useEffect(() => {
    const id = setInterval(() => {
      newGreeting(c => c + 1)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <Container>
      <Text>
        <h1>{data.content}</h1>
      </Text>
      <Button onClick={onClick} homeButton={homeButton}>
        Start your day!
      </Button>
    </Container>
  )
}
