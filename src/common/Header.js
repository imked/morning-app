import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo_sunrise.png'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4b16b;
  box-shadow: 0 0 16px 0 rgba(219, 219, 219, 1);
`
const StyledImage = styled.img`
  height: 48px;
`
export default function Header() {
  return (
    <StyledHeader>
      <StyledImage data-cy="header-logo" src={logo} alt="sunrise" />
    </StyledHeader>
  )
}
