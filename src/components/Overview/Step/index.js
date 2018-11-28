import React, { Component } from 'react'

import { Pane, Heading, Text } from 'evergreen-ui'
import Header from './Header';
import Activities from './Activites';
import { Link } from 'react-router-dom'

export default class Step extends Component {
  render() {
    const { match } = this.props;
    const { subject, step } = match.params

    return (
      <Pane width="100%" textAlign="center">
        <Link to={`/overview/${subject}`}>
          <Heading textAlign="left" is="h1" color="#45BBA3">
            <Heading display="inline">{subject} ></Heading>
            {' '}
            Steg {step}
          </Heading> 
        </Link>
        <Pane elevation={1} padding={12} marginTop={12}>
          <Header step={step} />
          <Activities />
        </Pane>
      </Pane>
    )
  }
}