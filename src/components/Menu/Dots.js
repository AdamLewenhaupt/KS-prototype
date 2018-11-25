import React, { Component } from 'react'

import { Pane, Avatar } from 'evergreen-ui'

const range = (n) => [...Array(n).keys()]

export default class Dots extends Component {
  render() {
    const { n, progress } = this.props

    const remaining = n - progress

    return (
      <Pane 
        position="relative"
      >
        <Pane 
          marginLeft={10}
          marginRight={10}
          position="relative" 
          top={14} 
          backgroundColor="#E4E7EB"
          opacity="0.3"
          borderBottom="4px solid gray" 
        />
        <Pane>
        {range(progress).map((_, i) => (
          <Avatar marginLeft={4} isSolid name=" " color="green" />
        ))}
        {range(remaining).map((_, i) => (
          <Avatar marginLeft={4} name=" " color="neutral" />
        ))}
        </Pane>
      </Pane>
    )
  }
}