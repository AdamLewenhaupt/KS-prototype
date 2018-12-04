import React, { Component, Fragment } from 'react'
import styles from './Header.css'

import { Pane, Button } from 'evergreen-ui'
import { Link, withRouter } from 'react-router-dom'

const options = [
  { label: 'Aktuellt', href: '/' },
  { label: 'Schema', href: '/a' },
  { label: 'Terminsplanering', href: '/b' },
  { label: 'Senaste Bedömningar', href: '/c' },
  { label: 'Terminsöversikt', href: '/overview' },
]

class Header extends Component {
  render() {
    const { location } = this.props
    const matchCurrent = (href) => location.pathname === href

    return (
      <Fragment>
        <Pane elevation={1}>
          {
            options.map(option => {
              const current = matchCurrent(option.href)
              const apperance = current ? "default" : "minimal"

              return (
                <Link 
                  key={option.label} 
                  to={option.href} 
                  className="header-link"
                >
                  <Button appearance={apperance}>
                    {option.label}
                  </Button>
                </Link>
              )
            })
          }   
        </Pane>
      </Fragment>
    )
  }
}

export default withRouter(Header)