import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Heading, Pane } from 'evergreen-ui'
import { withRouter, Redirect } from 'react-router-dom'
import Step from './Step';

import _ from 'lodash'

const steps = [
  { number: 18 }
]

class Steps extends Component {
  render() {
    const { match, courses } = this.props;
    const { subject } = match.params

    const course = _.find(courses, c => c.name === subject)

    if (!course) {
      return <Redirect to="/overview" />
    }

    return (
      <Pane width="100%">
        <Heading is="h1" color="#45BBA3">
          {course.name}
        </Heading> 
        {
          course.steps.map(step => (
            <Step subject={subject} key={step.number} step={step} />
          ))
        }
      </Pane>
    )
  }
}

export default withRouter(connect(state => ({
  courses: state.courses
}))(Steps))