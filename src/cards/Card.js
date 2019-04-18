import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  width: 286px;
  border-radius: 10px;
  box-shadow: 10px 11px 16px 10px rgba(219, 219, 219, 1);
  color: #333;
  background-color: #ffffff;
  position: relative;
  margin: 0;

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

  > p  {
    height: 150px;
    padding: 0 20px 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow-y: scroll;
    margin: 0;
  }

  > * {
    border-radius: 10px;
  }
`
const StyledTitle = styled.div`
  margin: 0;
  padding: 0 20px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: #f4b16b;
  > div {
    margin-top: 20px;
  }
`

const StyledImage = styled.div`
  position: relative;
  & :after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    opacity: 0.5;
  }
`

export default function Card({
  title,
  content,
  img,
  alt,
  onSelect,
  isSelected,
}) {
  return (
    <StyledCard>
      <StyledImage>
        <img src={img} alt={alt} />
      </StyledImage>
      <StyledTitle>
        <h3>{title}</h3>
        <div onClick={onSelect}>
          {isSelected ? (
            <i className="fas fa-star" />
          ) : (
            <i className="far fa-star" />
          )}
        </div>
      </StyledTitle>
      <p>{content}</p>
    </StyledCard>
  )
}
