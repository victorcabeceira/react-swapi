import React from 'react';

import { Route, withRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Planets from './containers/planets';
import MainPage from './containers/mainPage/mainPage';
import CustomLayout from './hoc/Layout/Layout';

import './App.css';

const app = props => {
  let routes = (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route path='/planets' render={(props) => <Planets {...props} />} />
      <Route path='/' render={(props) => <MainPage {...props} />} />
      <Redirect to='/' />
    </AnimatedSwitch>
  );
  return (
    <div>
      <CustomLayout {...props}>
        {routes}
      </CustomLayout>
    </div>
  );
}

export default withRouter(app);
