import React, { Component } from 'react'
import styles from './Menu.css'

import { connect } from 'react-redux'
import { Card, Pane } from 'evergreen-ui'
import Header from './Header';
import Subject from './Subject';

class Menu extends Component {
  render() {
    const { courses } = this.props
    return (
      <Card 
        elevation={1}
        backgroundColor="#BED3CE"
        padding={16}
      >
        <Header />
        <Pane marginTop={12}>
          {
            courses.map(course => (
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