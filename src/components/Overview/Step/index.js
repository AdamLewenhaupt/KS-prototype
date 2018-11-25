import React, { Component } from 'react'

import { Pane } from 'evergreen-ui'
import Header from './Header';

export default class Step extends Component {
  render() {
    const { match } = this.props;
    const { subject, step } = match.params

    return (
      <Pane width="100%">
        <Header step={step} />
      </Pane>
    )
  }
}