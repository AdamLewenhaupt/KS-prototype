import React, { Component } from 'react'

import { Pane, Strong, UnorderedList, ListItem } from 'evergreen-ui'

export default class Summary extends Component {
  render() {
    return (
      <Pane>
        <Strong>Vykort</Strong>
        <UnorderedList>
          <ListItem>Berätta och skriv om olika miljöer</ListItem>
          <ListItem>Typiska aktiviteter</ListItem>
          <ListItem>Läsa, förstå och skriva vykort</ListItem>
        </UnorderedList>
      </Pane>
    )
  }
}