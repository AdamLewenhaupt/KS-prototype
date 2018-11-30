import React, { Component } from 'react'
import './Subject.css'

import { 
  Pill, Card, Pane, IconButton, Strong,
  UnorderedList, ListItem
} from 'evergreen-ui'
import Dots from './Dots';

const items = {
    "Tillgodogöra dig innehållet i en novell": [
    { text: 'Ordinlärningsstrategier', selected: true, done: true }
  ],

  "Skriva en läslogg": [
    { text: 'Obestämd artikel', selected: true },
    { text: 'Att läsa och skriva', selected: true },
  ]
}

export default class Subject extends Component {
  state = {
    showContent: false
  }

  toggleShowContent = () => {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    const { name } = this.props

    return (
      <Card
        backgroundColor="#F1F5F4"
      >
        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={8}
          backgroundColor="#EEEEEE"
          color="#88D0C1"
          borderBottom="1px solid rgb(160, 160, 160)"
        >
          <strong>{name.toUpperCase()}</strong>
          <Dots n={3} progress={1} />
          <IconButton 
            appearance="minimal" 
            icon={this.state.showContent ? "chevron-up" : "chevron-down"}
            onClick={this.toggleShowContent}
            />
        </Pane>
        {
          this.state.showContent && (
            <Pane>
              {
                Object.keys(items).map(category => {
                  return (
                    <Pane key={category} padding={8}>
                      <Strong>
                        <Pill color="green">{15}</Pill> {category}
                      </Strong>
                      <UnorderedList
                        icon="circle"
                      >
                        {items[category].map(activity => (
                          <ListItem 
                            key={activity.text}
                          >
                            {activity.text}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Pane>
                  )
                })
              }
            </Pane>
          )
        }
      </Card>
    )
  }
}