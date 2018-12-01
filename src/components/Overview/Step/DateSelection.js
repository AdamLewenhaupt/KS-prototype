import React, { Component } from 'react'

import { Pane, Strong, Card, Heading } from 'evergreen-ui'
import _ from 'lodash'
import moment from 'moment'

const generateDates = _.memoize(() => {
  const today = moment()
  return _.range(0,5).map(n => today.clone().add(n + 14, 'days'))
})

export default class DateSelection extends Component {
  render() {
    return (
      <Pane 
        textAlign="left" 
        padding={20}
        borderBottom="1px solid #bbb"
      >
        <Strong size={600} color="#45BBA3" as="h2">
          Välj Redovisningstillfälle
        </Strong>
        <Pane 
          display="flex" 
          justifyContent="space-around"
          marginTop={16}
        >
          {
            generateDates().map(day => (
              <Card 
                key={day.toString()}
                backgroundColor="#45BBA3" 
                flex={1} 
                marginLeft={16} 
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minWidth={80}
                maxWidth={80}
                maxHeight={80}
                minHeight={80}
                >
                <Heading size={900} color="white" as="h1">{day.format('D')}</Heading> 
                <Heading color="white" as="h2">{day.format('MMM')}</Heading> 
              </Card>
            ))
          }
        </Pane>
      </Pane>
    )
  }
}