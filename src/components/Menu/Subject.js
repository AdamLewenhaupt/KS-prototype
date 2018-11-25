import React, { Component } from 'react'
import './Subject.css'

import { Card, Pane, IconButton } from 'evergreen-ui'
import Dots from './Dots';

export default class Subject extends Component {
  render() {
    const { name } = this.props

    return (
      <Card
        backgroundColor="#F1F5F4"
      >
        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={8}
          backgroundColor="#EEEEEE"
          color="#88D0C1"
          borderBottom="1px solid rgb(160, 160, 160)"
        >
          <strong>{name.toUpperCase()}</strong>
          <Dots n={3} progress={1} />
          <IconButton appearance="minimal" icon="chevron-down" />
        </Pane>
      </Card>
    )
  }
}