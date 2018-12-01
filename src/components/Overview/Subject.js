import React, { Component } from 'react'
import { 
  getCourseProgress, 
  getStepProgress 
} from '../../utils/progress'

import './Subject.css'

import { Progress } from '../Common'
import { Pane, Card, Text, Strong } from 'evergreen-ui'
import _ from 'lodash'

import { Link } from 'react-router-dom'

export default class Subject extends Component {
  render() {
    const { course } = this.props;
    const { color, name, steps } = course
    
    const progress = getCourseProgress(course)
    const currentStep = _.find(steps, (s) => getStepProgress(s) !== 100)

    return (
      <Link to={`/overview/${name}`} className="subject-link">
        <Pane cursor="pointer" elevation={0} padding={8} marginBottom={16}>
          <Strong color={color}>{name}</Strong>
          <Pane>     
            {!currentStep && <Text>Inget steg påbörjat</Text>}
            {currentStep && <Text>Steg {currentStep.number}</Text>}
            <Card overflow="hidden">
              <Progress color={color} percent={Math.round(progress)} />
            </Card>
          </Pane>
          <Pane>
            <Text>Termin</Text>
            <Card display="flex" overflow="hidden">
            {
              steps.map((step, i) => {
                console.log(step)
                return (
                  <Progress 
                    key={step.name}
                    color={color}
                    percent={getStepProgress(step)} 
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