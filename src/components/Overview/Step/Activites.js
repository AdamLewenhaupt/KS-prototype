import React, { Component, Fragment } from 'react'
import styles from './Activities.css'

import {
  UnorderedList,
  ListItem,
  Button,
  Strong
} from 'evergreen-ui'

export default class Activities extends Component {
  render() {
    const { step } = this.props

    const { tasks } = step

    return (
      <UnorderedList
        display="inline-block"
        width="100%"
        maxWidth="400px"
        listStyleType="none"
        marginLeft={0}
        padding={12}
        textAlign="left"
      >
        {
          tasks.map(task => {
            return [
              (<ListItem key={task.id} 
              >
                <Strong>{task.title}</Strong>
              </ListItem>),
              ...task.subTasks.map(st => (
                <ListItem 
                  listStylePosition="inside"
                  key={st.id}
                >
                  <Button 
                    width="100%"
                    appearance={st.completed ? "primary" : "default"}
                    intent="success"
                  >
                    {st.text}
                  </Button>
                </ListItem>
              ))
            ]
          })
        }
      </UnorderedList>
    )
  }
}