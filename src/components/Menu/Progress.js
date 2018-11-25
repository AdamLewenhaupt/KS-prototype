import React, { Component } from 'react'
import './Progress.css'

import { Card, Pane } from 'evergreen-ui'

export default class Progress extends Component {
  render() {
    const { percent } = this.props

    return (
      <Card 
        height={30} 
        width="100%" 
        backgroundColor="#F1F5F4" 
      >
        <Pane 
          height={30} 
          width={`${percent}%`} 
          backgroundColor="#3EBCA3" 
        />
        <Pane marginTop={-24} textAlign="center">
        {percent} %</Pane>
      </Card>
    )
  }
}