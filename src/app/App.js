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
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto:300,400"
            rel="stylesheet"
          />
        </Helmet>
        <Card />
      </div>
    )
  }
}
