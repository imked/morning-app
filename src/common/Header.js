import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo_sunrise.png'

const StyledHeader = styled.header`
  display: flex;
  background: #f4b16b;
  justify-content: center;
  align-items: center;
`
const StyledImage = styled.img`
  height: 48px;
`
const StyledTitle = styled.div`
  color: #fefefe;
  padding: 0 30px;
  font-family: 'Roboto slab', serif;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Miracle</StyledTitle>
      <StyledImage src={logo} alt="sunrise" />
      <StyledTitle>Morning</StyledTitle>
    </StyledHeader>
  )
}
