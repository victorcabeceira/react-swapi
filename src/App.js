import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/planets' render={(props) => <div>Planets page</div>} />
        <Route path='/' render={(props) => <div>Main page</div>} />
        <Redirect to='/' />
      </Switch>
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
