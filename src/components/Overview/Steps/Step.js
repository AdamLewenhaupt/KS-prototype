import React, { Component } from 'react'

import { 
  Pane, 
  Heading, 
  Strong, 
  UnorderedList, 
  ListItem 
} from 'evergreen-ui'
import Doughnut from '../../Common/Doughnut';

export default class Step extends Component {
  render() {
    const { number } = this.props
    return (
      <Pane elevation={3} padding={8} width="100%" marginTop={16}>
        <Heading textAlign="center" is="h3">Steg {number}</Heading>
        <Pane display="flex" alignItems="center">
          <Pane width="25%">
            <Doughnut percentage={65} />
          </Pane>
          <Pane>
            <Strong>Vykort</Strong>
            <UnorderedList>
              <ListItem>Berätta och skriv om olika miljöer</ListItem>
              <ListItem>Typiska aktiviteter</ListItem>
              <ListItem>Läsa, förstå och skriva vykort</ListItem>
            </UnorderedList>
          </Pane>
        </Pane>
      </Pane>
    )
  }
}