import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import { toggleSubtask } from '../../../store/courses'

import {
  UnorderedList,
  ListItem,
  Button,
  Strong
} from 'evergreen-ui'

class Activities extends Component {
  selectSubtask = (taskID, subtaskID) => {
    const {
      courseID,
      step,
      toggleSubtask
    } = this.props

    toggleSubtask(courseID, step.id, taskID, subtaskID)
  }

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
                    onClick={this.selectSubtask.bind(this, task.id, st.id)}
                    width="100%"
                    appearance={st.selected ? "primary" : "default"}
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

export default connect(null, {
  toggleSubtask
})(Activities)