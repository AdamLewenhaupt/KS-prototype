import React, { Component } from 'react'

import './Subject.css'

import { Progress } from '../Common'
import { Pane, Card, Text, Strong } from 'evergreen-ui'
import _ from 'lodash'

import { Link } from 'react-router-dom'

export default class Subject extends Component {
  render() {
    const { color, name, steps } = this.props;
    
    const totalProgress = _.sum(steps.map(s => s.progress)) / steps.length
    const currentStep = _.find(steps, (s) => s.progress !== 100)

    return (
      <Link to={`/overview/${name}`} className="subject-link">
        <Pane cursor="pointer" elevation={0} padding={8} marginBottom={16}>
          <Strong color={color}>{name}</Strong>
          <Pane>     
            <Text>Steg {currentStep.number}</Text>
            <Card overflow="hidden">
              <Progress color={color} percent={Math.round(totalProgress)} />
            </Card>
          </Pane>
          <Pane>
            <Text>Termin</Text>
            <Card display="flex" overflow="hidden">
            {
              steps.map((step, i) => {
                return (
                  <Progress 
                    key={step.name}
                    color={color}
                    percent={step.progress} 
                    text={`Steg ${step.number}`}
                    borderLeft={i !== 0 ? "2px solid white" : null}
                  />
                )
              })
            }
            </Card>
          </Pane>
        </Pane>
      </Link>
    )
  }
}