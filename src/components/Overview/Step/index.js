import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Pane, Heading, Text } from 'evergreen-ui'
import Header from './Header';
import Activities from './Activites';
import { Link, Redirect } from 'react-router-dom'

import _ from 'lodash'
import DateSelection from './DateSelection'

class Step extends Component {
  render() {
    const { match, courses } = this.props;
    const { subject, step: number } = match.params

    const course = _.find(courses, c => c.name === subject)

    if (!course) {
      return <Redirect to="/overview/" />
    }

    const step = _.find(course.steps, s => s.number == number)

    if (!step) {
      return <Redirect to={`/overview/${subject}`} />
    }

    return (
      <Pane width="100%" textAlign="center">
        <Link to={`/overview/${subject}`}>
          <Heading textAlign="left" is="h1" color="#45BBA3">
            <Heading display="inline">{subject} ></Heading>
            {' '}
            Steg {step.number}
          </Heading> 
        </Link>
        <Pane elevation={1} padding={12} marginTop={12}>
          <Header step={step} />
          {!step.selectedDate && <DateSelection courseID={course.id} step={step} />}
          <Activities step={step} courseID={course.id} />
        </Pane>
      </Pane>
    )
  }
}

export default connect(state => ({
  courses: state.courses
}))(Step)