import React, { Component } from 'react'

import { Doughnut as CDoughnut } from 'react-chartjs-2'

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

export default class Doughnut extends Component {
  render() {
    const { percentage } = this.props

    return (
      <CDoughnut
        legend={false}
        data={data(percentage)}
        options={{
          cutoutPercentage: 70,
          tooltips: {
            enabled: false,
          }
        }}
      />
    )
  }
}