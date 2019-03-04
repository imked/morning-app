import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  width: 286px;
  background: '#FFFFFF';
  box-shadow: 0 2px 4px 0;
  border-radius: 6px;
  font-family: 'Open Sans', sans-serif;

  > h3,
  p {
    margin: 0;
    padding: 0 20px 20px;
  }
`

export default function Card() {
  return (
    <StyledCard>
      <img src="/pictures/glasofwater.png" alt="glass of water" />
      <h3>Drink Water</h3>
      <p>
        After waking up, drink a large glass of water with a pinch of salt
        (provided in the evening) and lemon juice. Your body is dehydrated after
        the night, water right after getting up can work wonders.
      </p>
    </StyledCard>
  )
}
