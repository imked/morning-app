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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  display: grid;
  grid-template-rows: 70px 20px;
  align-content: center;
  justify-content: center;
`

const Text = styled.div`
  width: 286px;
  height: 38px;
  color: #fefefe;
  text-align: center;
`

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: none;
  color: #fefefe;
  font-size: 16px;
  text-decoration: underline;
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
    }, 1100)
    return () => clearInterval(id)
  }, [])

  return (
    <Background>
      <Text>
        <h1>{data.content}</h1>
      </Text>
      <Button onClick={onClick} homeButton={homeButton}>
        Start your Morning!
      </Button>
    </Background>
  )
}
