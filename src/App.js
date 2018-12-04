import React, { Component } from 'react';
import './App.css';

import moment from 'moment'

import { Pane } from 'evergreen-ui'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import News from './components/News/News'
import Menu from './components/Menu/Menu';

moment.locale('sv')

class App extends Component {
  render() {
    return (
      <Pane 
        display="flex" 
        boxSizing="border-box"
        backgroundColor="white"
        minHeight="100vh"
        elevation={1}
      >
        <Pane 
          width="60%" 
          marginLeft={16}             
          marginTop={16}
        >
          <Header />
          <Pane 
            elevation={3}
            marginTop={16}
          >
            <Switch>
              <Route exact path="/" component={News} />
              <Route path="/overview" component={Overview} />
            </Switch>
          </Pane>
        </Pane>
        <Pane width="40%" margin={16}>
          <Menu />
        </Pane>
      </Pane>
    );
  }
}

export default App;
