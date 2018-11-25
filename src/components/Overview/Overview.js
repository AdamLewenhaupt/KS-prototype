import React, { Component } from 'react'
import styles from './Overview.css'

import { Switch, Route } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import Semester from './Semester';
import Steps from './Steps';
import Step from './Step';

const subjects = [
  {
    name: "Engelska",
    color: "#1DAFEB",
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

export default class Overview extends Component {
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
          <Route component={() => <Semester subjects={subjects} />} />
        </Switch>
      </Pane>
    );
  }
}