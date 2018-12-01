import React, { Component } from 'react'
import Doughnut from '../../Common/Doughnut';
import Summary from './Summary';

import { getStepProgress } from '../../../utils/progress'
import { Pane, Card, Heading } from 'evergreen-ui'

export default class Header extends Component {
  render() {
    const { step } = this.props

    return (
      <Pane 
        textAlign="left"
        display="flex" 
        alignItems="fill" 
        width="100%" 
        justifyContent="space-between"
        borderBottom="1px solid rgb(190,190,190)"
        paddingBottom={16}
      >
        <Pane width="25%" display="flex" alignItems="center">
          <Doughnut percentage={getStepProgress(step)} />
        </Pane>
        <Pane>
          <Heading textAlign="center" size={400}>Steg {step.number}</Heading>
          <Summary step={step} />
        </Pane>
        <Card 
          backgroundColor="#45BBA3" 
          flex={1} 
          marginLeft={16} 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minWidth={120}
          maxWidth={120}
          maxHeight={120}
          minHeight={120}
          >
          <Heading size={900} color="white" as="h1">17</Heading> 
          <Heading color="white" as="h2">Okt</Heading> 
        </Card>
      </Pane>
    )
  }
}