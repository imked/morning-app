import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardContainer = styled.section`
  display: grid;
  grid-gap: 40px;
  padding: 38px;
  overflow-y: scroll;
  justify-content: center;
`

export default function Cards({ cards, onSelect }) {
  return (
    <CardContainer>
      {cards
        .filter(card => Object.keys(card).length > 2)
        .map(function(card, index) {
          return (
            <Card
              key={index}
              {...card}
              isSelected={card.isSelected}
              onSelect={() => onSelect(card)}
            />
          )
        })}
    </CardContainer>
  )
}
