import React, { Component } from 'react'
import Doughnut from '../../Common/Doughnut';
import Summary from './Summary';

import { Pane, Card, Heading } from 'evergreen-ui'

export default class Header extends Component {
  render() {
    return (
      <Pane 
        display="flex" 
        alignItems="fill" 
        width="100%" 
        justifyContent="space-between"
      >
        <Pane width="25%" display="flex" alignItems="center">
          <Doughnut percentage={50} />
        </Pane>
        <Summary />
        <Card 
          backgroundColor="#45BBA3" 
          flex={1} 
          marginLeft={16} 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={120}
          maxHeight={200}
          >
          <Heading size={900} color="white" as="h1">17</Heading> 
          <Heading color="white" as="h2">Okt</Heading> 
        </Card>
      </Pane>
    )
  }
}