import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom'
import { getCardsFromStorage, saveCardsToStorage } from '../services'

import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'

import Home from '../home/Home'
import Cards from '../cards/Cards'
import TaskPage from '../form/TaskPage'
import Timer from '../timer/Timer'
import Header from '../common/Header'

import bookmarkIcon from '../images/Bookmark.png'
import checkedIcon from '../images/Checked.png'
import clockIcon from '../images/Clock.png'

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
  text-decoration: none;

  > img {
    color: white;
  }

  &.active {
    background: #f4b16b;
  }
`

const state = {
  isClicked: false,
}

export default function App() {
  const [homeButton, setHomeButton] = useState(state)
  const [cards, setCards] = useState(getCardsFromStorage())

  function onClick() {
    setHomeButton({ isClicked: true })
  }

  useEffect(() => {
    saveCardsToStorage(cards)
  }, [cards])

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
        <Header />
        <Route
          exact
          path="/"
          render={() =>
            homeButton.isClicked ? (
              <Redirect to="/tasklist" />
            ) : (
              <Home onClick={onClick} homeButton={homeButton} />
            )
          }
        />
        <Route
          exact
          path="/tasklist"
          render={() => (
            <TaskPage cards={cards} onSelect={onSelect} setCards={setCards} />
          )}
        />
        <Route
          path="/routines"
          render={() => <Cards cards={cards} onSelect={onSelect} />}
        />
        <Route path="/timer" render={() => <Timer />} />
        <Nav>
          <StyledLink to="/routines">
            <img src={bookmarkIcon} alt="bookmark" />
          </StyledLink>
          <StyledLink to="/tasklist">
            <img src={checkedIcon} alt="checked" />
          </StyledLink>
          <StyledLink to="/timer">
            <img src={clockIcon} alt="clock" />
          </StyledLink>
        </Nav>
        <GlobalStyle />
      </Grid>
    </Router>
  )
}
