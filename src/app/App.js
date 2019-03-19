import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import Cards from '../cards/Cards'
import CreateTaskPage from '../form/CreateTaskPage'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../common/Header'
import routines from './routines'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 48px auto 48px;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  overflow: hidden;
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

export default function App() {
  const [cards, setCards] = useState(routines)

  function onSelect(card) {
    const index = cards.indexOf(card)
    setCards([
      ...cards.slice(0, index),
      { ...card, isSelected: !card.isSelected },
      ...cards.slice(index + 1),
    ])
  }

  return (
    <Router>
      <Grid>
        <Helmet>
          <title>My Miracle Morning</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Roboto+Slab"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Helmet>
        <Header />
        <Route
          exact
          path="/"
          render={() => <CreateTaskPage cards={cards} onSelect={onSelect} />}
        />
        <Route
          path="/routines"
          render={() => <Cards cards={cards} onSelect={onSelect} />}
        />
        <Nav>
          <StyledLink to="/routines">Routines</StyledLink>
          <StyledLink exact to="/">
            Daily Tasks
          </StyledLink>
        </Nav>
        <GlobalStyle />
      </Grid>
    </Router>
  )
}
