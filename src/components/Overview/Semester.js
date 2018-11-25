import React, { Component, Fragment } from 'react'
import Doughnut from '../Common/Doughnut';

import _ from 'lodash'
import Subject from './Subject'
import { Pane } from 'evergreen-ui'

const avg = (xs) => _.sum(xs) / xs.length

export default class Semester extends Component {
  render() {
    const { subjects } = this.props;

    const totalProgress = avg(subjects.map(subj => 
       avg(_.map(subj.steps, "progress"))))

    return (
      <Fragment>
        <Pane width="50%">
          {subjects.map(subject => (
            <Subject key={subject.name} {...subject} />
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