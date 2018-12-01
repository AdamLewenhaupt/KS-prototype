import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { getCourseProgress } from '../../utils/progress'
import { Pane, IconButton } from 'evergreen-ui'
import Progress from '../Common/Progress/Progress';

const avg = (xs) => _.sum(xs) / xs.length

class Header extends Component {
  render() {
    const { courses } = this.props
    const totalProgress = avg(courses.map(getCourseProgress))

    return (
      <Pane 
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
      >
        <Pane width="50%">
          <Progress percent={Math.round(totalProgress)} /> 
        </Pane>
        <Pane>Vecka 39</Pane>
        <Pane display="flex">
          <IconButton icon="chevron-left" />
          <IconButton icon="chevron-right" />
        </Pane>
      </Pane>
    )
  }
}

export default connect(state => ({
  courses: state.courses
}))(Header)