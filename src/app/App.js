import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom'

import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Home from '../home/Home'
import Cards from '../cards/Cards'
import CreateTaskPage from '../form/CreateTaskPage'
import Timer from '../timer/Timer'
import Header from '../common/Header'

import routines from './routines'
import bookmarkIcon from '../images/Bookmark.png'
import checkedIcon from '../images/Checked.png'
import clockIcon from '../images/Clock.png'
import { uid } from 'react-uid'

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
  const [cards, setCards] = useState(routines)

  function onSelect(card) {
    const index = cards.indexOf(card)
    setCards([
      ...cards.slice(0, index),
      { ...card, isSelected: !card.isSelected },
      ...cards.slice(index + 1),
    ])
  }

  function addTask(value) {
    setCards([...cards, { title: value, isSelected: true, id: uid }])
  }

  function onClick() {
    setHomeButton({ isClicked: true })
  }

  return (
    <Router>
      <Grid>
        <Helmet>
          <title>Miracle Morning</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Helmet>
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
            <CreateTaskPage
              cards={cards}
              onSelect={onSelect}
              addTask={addTask}
            />
          )}
        />
        <Route
          path="/routines"
          render={() => <Cards cards={cards} onSelect={onSelect} />}
        />
        <Route path="/timer" render={() => <Timer />} />
        <Nav>
          <StyledLink to="/tasklist">
            <img src={checkedIcon} alt="checked" />
          </StyledLink>
          <StyledLink to="/routines">
            <img src={bookmarkIcon} alt="bookmark" />
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
