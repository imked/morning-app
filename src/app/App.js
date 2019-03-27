import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import Home from '../home/Home'
import Cards from '../cards/Cards'
import CreateTaskPage from '../form/CreateTaskPage'
import Timer from '../timer/Timer'
import Helmet from 'react-helmet'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../common/Header'
import routines from './routines'
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
    setCards([...cards, { title: value, isSelected: true }])
  }

  function onClick() {
    setHomeButton({ isClicked: true })
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
          render={() =>
            homeButton.isClicked ? (
              <Redirect to="/create" />
            ) : (
              <Home onClick={onClick} homeButton={homeButton} />
            )
          }
        />
        <Route
          exact
          path="/create"
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
          <StyledLink to="/routines">
            <img src={bookmarkIcon} alt="bookmark" />
          </StyledLink>
          <StyledLink to="/create">
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
