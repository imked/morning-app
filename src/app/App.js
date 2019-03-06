import React, { Component } from 'react'
import Cards from '../cards/Cards'
import Helmet from 'react-helmet'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Morning App</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto:300,400"
            rel="stylesheet"
          />
        </Helmet>
        <Cards />
      </div>
    )
  }
}
