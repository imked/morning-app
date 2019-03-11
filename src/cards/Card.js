import React, { useState } from 'react'
import styled from 'styled-components'

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
  & :focus {
    outline: 0;
  }
`
Card.defaultProps = {
  title: 'No title defined',
  content: 'No content',
  selected: false,
  img: 'No image',
  alt: 'No image',
}

export default function Card({ title, content, img, alt }) {
  const [data, setData] = useState({ selected: false })

  function handleClick() {
    setData({ selected: !data.selected })
  }

  return (
    <StyledCard>
      <img src={img} alt={alt} />
      <h3>
        {title}
        <StyledButton onClick={handleClick}>
          {data.selected ? '-' : '+'}
        </StyledButton>
      </h3>
      <p>{content}</p>
    </StyledCard>
  )
}
