import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardContainer = styled.section`
  display: grid;
  grid-gap: 40px;
  padding: 38px;
  overflow-y: scroll;
`

export default function Cards({ cards }) {
  return (
    <CardContainer>
      {cards.map(function(card, index) {
        return <Card key={index} {...card} />
      })}
    </CardContainer>
  )
}
