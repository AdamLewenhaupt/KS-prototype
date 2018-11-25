import React, { Component } from 'react'
import styles from './Menu.css'

import { Card, Pane } from 'evergreen-ui'
import Header from './Header';
import Subject from './Subject';

export default class Menu extends Component {
  render() {
    return (
      <Card 
        elevation={1}
        backgroundColor="#BED3CE"
        padding={16}
      >
        <Header />
        <Pane marginTop={12}>
          <Subject name="Engelska" />
        </Pane>
      </Card>
    )
  }
}