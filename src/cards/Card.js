import React from 'react'
import styled from 'styled-components'
import waterPath from '../images/glasofwater.png'

const StyledCard = styled.section`
  width: 286px;
  box-shadow: 10px 11px 16px 0px rgba(219, 219, 219, 1);
  border-radius: 10px;
  color: #333;
  background-color: #ffffff;

  > h3 {
    margin: 0;
    padding: 10px 20px 20px;
    font-family: 'Open Sans', sans-serif;
  }

  > p  {
    overflow-y: scroll;
    margin: 0;
    padding: 0 20px 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`

export default function Card() {
  return (
    <StyledCard>
      <img src={waterPath} alt="glass of water" />
      <h3>Drink Water</h3>
      <p>
        After waking up, drink a large glass of water with a pinch of salt
        (provided in the evening) and lemon juice. Your body is dehydrated after
        the night, water right after getting up can work wonders.
      </p>
    </StyledCard>
  )
}
