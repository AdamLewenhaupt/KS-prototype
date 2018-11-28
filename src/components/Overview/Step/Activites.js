import React, { Component, Fragment } from 'react'
import styles from './Activities.css'

import {
  UnorderedList,
  ListItem,
  Button,
  Strong
} from 'evergreen-ui'

const items = {
    "Tillgodogöra dig innehållet i en novell": [
    { text: 'Ordinlärningsstrategier', selected: true, done: true }
  ],

  "Skriva en läslogg": [
    { text: 'Obestämd artikel', selected: true },
    { text: 'Att läsa och skriva', selected: true },
  ]
}

export default class Activities extends Component {
  render() {
    return (
      <UnorderedList
        display="inline-block"
        width="100%"
        maxWidth="400px"
        listStyleType="none"
        marginLeft={0}
        padding={12}
        textAlign="left"
      >
        {
          Object.keys(items).map(category => {
            const activites = items[category]

            return [
              (<ListItem key={category} 
              >
                <Strong>{category}</Strong>
              </ListItem>),
              ...activites.map(a => (
                <ListItem 
                  listStylePosition="inside"
                  key={a.text}
                >
                  <Button 
                    width="100%"
                    appearance={a.done ? "primary" : "default"}
                    intent="success"
                  >
                    {a.text}
                  </Button>
                </ListItem>
              ))
            ]
          })
        }
      </UnorderedList>
    )
  }
}