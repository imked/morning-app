import React, { Component } from 'react'
import Card from '../cards/Card'
import Helmet from 'react-helmet'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Morning App</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto"
            rel="stylesheet"
          />
        </Helmet>
        <Card />
      </div>
    )
  }
}
