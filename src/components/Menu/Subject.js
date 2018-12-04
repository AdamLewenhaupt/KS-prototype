import React, { Component } from 'react'
import { getStepProgress, getStatsForTasks } from '../../utils/progress'
import { completeSubtask } from '../../store/courses'
import { connect } from 'react-redux'
import { 
  subtaskIsActive, stepIsActive 
} from '../../utils/active'
import _ from 'lodash'

import './Subject.css'


import { 
  Pill, Card, Pane, IconButton, Strong,
  UnorderedList, ListItem
} from 'evergreen-ui'
import Dots from './Dots';

class Subject extends Component {
  state = {
    showContent: false
  }

  toggleShowContent = () => {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  completeSubtask = (stepID, taskID, subtaskID) => {
    const { course, completeSubtask } = this.props
    completeSubtask(course.id, stepID, taskID, subtaskID)
  }

  render() {
    const { course } = this.props
    const { name, steps } = course

    const stats = 
      _.flatten(_.map(steps.filter(stepIsActive), 'tasks'))
        .map(task => getStatsForTasks(task))
        .reduce((c, { completed, total }) => ({
          completed: c.completed + completed,
          total: c.total + total
        }), { completed: 0, total: 0 })

    return (
      <Card
        backgroundColor="#F1F5F4"
      >
        <Pane
          onClick={this.toggleShowContent}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={8}
          backgroundColor="#EEEEEE"
          color="#88D0C1"
          borderBottom="1px solid rgb(160, 160, 160)"
        >
          <strong>{name.toUpperCase()}</strong>
          <Dots n={stats.total} progress={stats.completed} />
          <IconButton 
            appearance="minimal" 
            icon={this.state.showContent ? "chevron-up" : "chevron-down"}
            />
        </Pane>
        {
          this.state.showContent && (
            <Pane>
              {
                steps.filter(stepIsActive).map(step => {
                  return (
                    <Pane key={step.id} padding={8}>
                      <Strong>
                        <Pill color="green">{step.number}</Pill> {step.title}
                      </Strong>
                      <UnorderedList
                        icon="circle"
                      >
                        {
                          _.flatten(_.map(step.tasks, task => {
                            return task.subTasks
                              .filter(subtaskIsActive)
                              .map(st => {
                                let props = {}
                                if (st.completed) {
                                  props.icon = 'full-circle'
                                  props.iconColor = '#45BBA3'
                                }

                                return (
                                  <ListItem 
                                    {...props}
                                    key={st.id}
                                    cursor="pointer"
                                    onClick={this.completeSubtask.bind(this, step.id, task.id, st.id)}
                                  >
                                    {st.text}
                                  </ListItem>
                                )
                              })
                          })
                          )}
                      </UnorderedList>
                    </Pane>
                  )
                })
              }
            </Pane>
          )
        }
      </Card>
    )
  }
}

export default connect(null, {
  completeSubtask
})(Subject)