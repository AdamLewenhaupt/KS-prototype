import React, { Component } from 'react'

import { Pane, Strong, UnorderedList, ListItem } from 'evergreen-ui'

export default class Summary extends Component {
  render() {
    const { step } = this.props

    return (
      <Pane>
        <Strong>Vykort</Strong>
        <UnorderedList>
          {
            step.tasks.map(task => (
              <ListItem key={task.id}>
                {task.title}
              </ListItem>
            ))
          }
        </UnorderedList>
      </Pane>
    )
  }
}