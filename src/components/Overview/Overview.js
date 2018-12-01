import { connect } from 'react-redux'
import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import Semester from './Semester';
import Steps from './Steps';
import Step from './Step';

const subjects = [
  {
    name: "Engelska",
    steps: [
      { number: 18, progress: 100 },
      { number: 19, progress: 79 },
      { number: 20, progress: 0 }
    ]
  },
  {
    name: "Franska", color: "#64CF3F", steps: [
      { number: 15, progress: 100 },
      { number: 16, progress: 100 },
      { number: 17, progress: 80 },
      { number: 18, progress: 0 }
    ]
  }
]

class Overview extends Component {
  render() {
    return (
      <Pane
        padding={16}
        backgroundColor="#F8F8F8"
        display="flex"
        alignItems="center"
      >
        <Switch>
          <Route path="/overview/:subject/:step" component={Step} />
          <Route path="/overview/:subject" component={Steps} />
          <Route component={Semester} />
        </Switch>
      </Pane>
    );
  }
}

export default Overview
