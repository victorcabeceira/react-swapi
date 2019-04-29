import React, { lazy, Suspense, Fragment } from 'react';

import { Route, withRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import LoadingPage from '../src/components/UI/LoadingPage/LoadingPage';

import './App.css';

const Planets = lazy(() => {
  return import('./containers/planets');
});

const Planet = lazy(() => {
  return import('./containers/planets/planet');
});

const MainPage = lazy(() => {
  return import('./containers/mainPage/mainPage');
});

const CustomLayout = lazy(() => {
  return import('./hoc/Layout/Layout');
});


const app = props => {
  let routes = (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path='/planets' component={Planets} />
      <Route exact path={`/planets/:id`} component={Planet}/>
      <Route path='/' component={MainPage} />
      <Redirect to='/' />
    </AnimatedSwitch>
  );
  return (
    <Fragment>
      <Suspense fallback={<LoadingPage {...props}/>}>
        <CustomLayout {...props}>
          {routes}
        </CustomLayout>
      </Suspense>
    </Fragment>
  );
}

export default withRouter(app);
