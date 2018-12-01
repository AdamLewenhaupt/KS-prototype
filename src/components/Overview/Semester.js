import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import Doughnut from '../Common/Doughnut';

import { getCourseProgress } from '../../utils/progress'

import _ from 'lodash'
import Subject from './Subject'
import { Pane } from 'evergreen-ui'

const avg = (xs) => _.sum(xs) / xs.length

class Semester extends Component {
  render() {
    const { courses } = this.props;

    const totalProgress = avg(courses.map(getCourseProgress))

    return (
      <Fragment>
        <Pane width="50%">
          {courses.map(course => (
            <Subject key={course.name} course={course} />
          ))}
        </Pane>
        <Pane width="50%" textAlign="center">
          <h1>Termin {Math.round(totalProgress)} %</h1>
          <Doughnut percentage={totalProgress} />
        </Pane>
      </Fragment>
    )
  }
}

export default connect(state => ({
  courses: state.courses
}))(Semester)