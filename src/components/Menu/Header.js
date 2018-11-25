import React, { Component } from 'react'
import styles from './Header.css'

import { Pane, IconButton } from 'evergreen-ui'
import Progress from './Progress';

export default class Header extends Component {
  render() {
    return (
      <Pane 
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
      >
        <Pane width="50%">
          <Progress percent={75} /> 
        </Pane>
        <Pane>Vecka 39</Pane>
        <Pane display="flex">
          <IconButton icon="chevron-left" />
          <IconButton icon="chevron-right" />
        </Pane>
      </Pane>
    )
  }
}