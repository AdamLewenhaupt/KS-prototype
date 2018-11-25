import React, { Component } from 'react'
import styles from './Overview.css'

import { Doughnut } from 'react-chartjs-2'
import { Pane } from 'evergreen-ui'
import Subject from './Subject';

const data = (p) => ({
  datasets: [{
    data: [p, (100 - p)],
    backgroundColor: [
      '#45BBA3',
      '#FFF'
    ],
    hoverBackgroundColor: [
      '#45BBA3',
      '#FFF'
    ]
  }]
})

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
    const percentages = 67

    return (
      <Pane
        padding={16}
        backgroundColor="#F8F8F8"
        display="flex"
        alignItems="center"
      >
        <Pane width="50%">
          {subjects.map(subject => (
            <Subject key={subject.name} {...subject} />
          ))}
        </Pane>
        <Pane width="50%" textAlign="center">
          <h1>Termin {percentages} %</h1>
          <Doughnut
            legend={false}
            data={data(percentages)}
            options={{
              cutoutPercentage: 70,
              tooltips: {
                enabled: false,
              }
            }}
          />
        </Pane>
      </Pane>
    );
  }
}