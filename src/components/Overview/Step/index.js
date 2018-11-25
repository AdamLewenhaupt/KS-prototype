import React, { Component } from 'react'

import { Pane } from 'evergreen-ui'
import Header from './Header';

export default class Step extends Component {
  render() {
    return (
      <Pane width="100%">
        <Header />
      </Pane>
    )
  }
}