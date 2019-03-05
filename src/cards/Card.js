import React, { useState } from 'react'
import styled from 'styled-components'
import waterPath from '../images/glasofwater.png'

const StyledCard = styled.section`
  width: 286px;
  box-shadow: 10px 11px 16px 0px rgba(219, 219, 219, 1);
  border-radius: 10px;
  color: #333;
  background-color: #ffffff;
  position: relative;

  & :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 1) 90%
    );
  }

  > h3 {
    margin: 0;
    padding: 10px 20px 20px;
    font-family: 'Open Sans', sans-serif;
    position: relative;
  }

  > p  {
    height: 150px;
    padding: 0 20px 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow-y: scroll;
  }
`
const StyledButton = styled.button`
  position: absolute;
  right: 20px;
  top: 6px;
  width: 20px;
  height: 6px;
  color: #333;
  font-size: 24px;
`

export default function Card() {
  const [data, setData] = useState({ selected: false })

  function handleClick() {
    setData({ selected: !data.selected })
  }

  return (
    <StyledCard>
      <img src={waterPath} alt="glass of water" />
      <h3>
        Drink Water
        <StyledButton onClick={handleClick}>
          {data.selected ? '-' : '+'}
        </StyledButton>
      </h3>
      <p>
        After waking up, drink a large glass of water with a pinch of salt
        (provided in the evening) and lemon juice. Your body is dehydrated after
        the night, water right after getting up can work wonders. After waking
        up, drink a large glass of water with a pinch of salt (provided in the
        evening) and lemon juice. Your body is dehydrated after the night, water
        right after getting up can work wonders.
      </p>
    </StyledCard>
  )
}
