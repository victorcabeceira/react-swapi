import React, { Component } from 'react';
import { Route, withRouter, Redirect, NavLink } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Planets from './containers/planets';

import './App.css';

class App extends Component {

  render() {
    let routes = (
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path='/planets' render={(props) => <Planets {...props}/>} />
        <Route path='/' render={(props) => <div>Main page</div>} />
        <Redirect to='/' />
      </AnimatedSwitch>
    );
    return (
      <div>
        <NavLink to='/'>Main</NavLink>
        {' | '}
        <NavLink to='/planets'>Planets</NavLink>

        {routes}

      </div>
    );
  }
}

export default withRouter(App);
