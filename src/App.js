import React, { lazy, Suspense, Fragment } from 'react';

import { Route, withRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import LoadingPage from '../src/components/UI/LoadingPage/LoadingPage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';

const Planets = lazy(() => {
  return import('./containers/planets/Planets');
});

const Planet = lazy(() => {
  return import('./containers/planets/planet/Planet');
});

const Starships = lazy(() => {
  return import('./containers/starships/Starships');
});

const MainPage = lazy(() => {
  return import('./containers/mainPage/mainPage');
});

const CustomLayout = lazy(() => {
  return import('./hoc/Layout/Layout');
});

library.add(fab)

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
      <Route exact path='/starships' component={Starships} />
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
