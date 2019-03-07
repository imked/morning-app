import React, { Component } from 'react'
import Cards from '../cards/Cards'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 48px;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6c972;
  color: #fff;
  text-decoration: none;

  &.active {
    background: #f4b16b;
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Helmet>
            <title>My Miracle Morning</title>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto:300,400"
              rel="stylesheet"
            />
          </Helmet>
          <Route exact path="/" />
          <Route path="/routines" component={Cards} />
          <Nav>
            <StyledLink exact to="/">
              Daily Tasks
            </StyledLink>
            <StyledLink to="/routines">Routines</StyledLink>
          </Nav>
        </Grid>
      </Router>
    )
  }
}
