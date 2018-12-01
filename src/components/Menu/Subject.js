import React, { Component } from 'react'
import { getStepProgress } from '../../utils/progress'
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

const items = {
    "Tillgodogöra dig innehållet i en novell": [
    { text: 'Ordinlärningsstrategier', selected: true, done: true }
  ],

  "Skriva en läslogg": [
    { text: 'Obestämd artikel', selected: true },
    { text: 'Att läsa och skriva', selected: true },
  ]
}

export default class Subject extends Component {
  state = {
    showContent: false
  }

  toggleShowContent = () => {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    const { course } = this.props
    const { name, steps } = course

    const completedSteps = _.filter(steps, s => getStepProgress(s) === 100).length

    return (
      <Card
        backgroundColor="#F1F5F4"
      >
        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={8}
          backgroundColor="#EEEEEE"
          color="#88D0C1"
          borderBottom="1px solid rgb(160, 160, 160)"
        >
          <strong>{name.toUpperCase()}</strong>
          <Dots n={steps.length} progress={completedSteps} />
          <IconButton 
            appearance="minimal" 
            icon={this.state.showContent ? "chevron-up" : "chevron-down"}
            onClick={this.toggleShowContent}
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
                          _.flatten(_.map(step.tasks, 'subTasks'))
                          .filter(subtaskIsActive)
                          .map(st => (
                          <ListItem 
                            key={st.id}
                          >
                            {st.text}
                          </ListItem>
                        ))}
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