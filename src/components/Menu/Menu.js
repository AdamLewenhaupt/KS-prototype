import React, { Component } from 'react'
import { 
  courseIsActive
} from '../../utils/active'

import { connect } from 'react-redux'
import { Card, Pane, Text } from 'evergreen-ui'
import Header from './Header';
import Subject from './Subject';

class Menu extends Component {
  render() {
    const { courses } = this.props

    const activeCourses = courses.filter(courseIsActive)

    return (
      <Card 
        elevation={1}
        backgroundColor="#BED3CE"
        padding={16}
      >
        <Header />
        <Pane marginTop={12}>
          {
            activeCourses.length === 0 ?
            <Text>Inga Aktiva Kurser</Text>
            :
            activeCourses.map(course => (
              <Subject key={course.id} course={course} />
            ))
          }
        </Pane>
      </Card>
    )
  }
}

export default connect(state => ({
  courses: state.courses
}))(Menu)