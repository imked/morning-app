import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo_sunrise.png'

const StyledHeader = styled.header`
  display: flex;
  background: #f4b16b;
  justify-content: flex-start;
  align-items: center;
`
const StyledImage = styled.img`
  height: 48px;
`
const StyledTitle = styled.div`
  color: #fefefe;
  padding: 0;
  font-family: 'Roboto slab', serif;
  font-size: 24px;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledImage data-cy="header-logo" src={logo} alt="sunrise" />
      <StyledTitle>MIRACLE MORNING</StyledTitle>
    </StyledHeader>
  )
}
