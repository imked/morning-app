import React, { Component } from 'react'
import Cards from '../cards/Cards'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>Morning App</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto:300,400"
            rel="stylesheet"
          />
        </Helmet>
        <div>
          <Route exact path="/" />
          <Route path="/routines" component={Cards} />
        </div>
        <nav>
          <link exact to="/">
            Daily Tasks
          </link>
          <link to="/routines">Morning Routine</link>
        </nav>
      </Router>
    )
  }
}
