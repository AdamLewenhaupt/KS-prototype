import React, { Component } from 'react'
import './Progress.css'

import { Card, Pane, Text } from 'evergreen-ui'

export default class Progress extends Component {
  render() {
    const { percent, text, color, ...rest } = this.props

    const innerText = text || `${percent} %`

    return (
      <Card 
        {...rest}
        height={30} 
        width="100%" 
        backgroundColor="#F1F5F4" 
        overflow="hidden"
      >
        <Pane 
          className="progress-bar"
          height={30} 
          width={`${percent}%`} 
          background={color || "#3EBCA3"} 
        />
        <Pane marginTop={-24} textAlign="center">
          <Text color="black">{innerText}</Text>
        </Pane>
      </Card>
    )
  }
}