import React, { Component } from 'react'
import './Step.css'

import { Link } from 'react-router-dom'

import { 
  Pane, 
  Heading, 
  Strong, 
  UnorderedList, 
  ListItem 
} from 'evergreen-ui'
import Doughnut from '../../Common/Doughnut';
import Summary from '../Step/Summary';

export default class Step extends Component {
  render() {
    const { subject, number } = this.props
    return (
      <Link to={`/overview/${subject}/${number}`} className="step-link">
        <Pane elevation={3} padding={8} width="100%" marginTop={16}>
          <Heading textAlign="center" is="h3">Steg {number}</Heading>
          <Pane display="flex" alignItems="center">
            <Pane width="25%">
              <Doughnut percentage={65} />
            </Pane>
            <Summary />
          </Pane>
        </Pane>
      </Link>
    )
  }
}