import React, { Component } from 'react'

import { Heading, Pane } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import Step from './Step';

const steps = [
  { number: 18 }
]

class Steps extends Component {
  render() {
    const { match } = this.props;
    const { subject } = match.params

    return (
      <Pane width="100%">
        <Heading is="h1" color="#45BBA3">
          {subject}
        </Heading> 
        {
          steps.map(step => (
            <Step subject={subject} key={step.number} {...step} />
          ))
        }
      </Pane>
    )
  }
}

export default withRouter(Steps)