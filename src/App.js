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

const Starship = lazy(() => {
  return import('./containers/starships/starship/Starship');
});

const Vehicles = lazy(() => {
  return import('./containers/vehicles/Vehicles');
});

const Vehicle = lazy(() => {
  return import('./containers/vehicles/vehicle/Vehicle');
});

const People = lazy(() => {
  return import('./containers/people/People');
});

const Person = lazy(() => {
  return import('./containers/people/person/Person');
});

const Films = lazy(() => {
  return import('./containers/films/Films');
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
      <Route exact path={`/starships/:id`} component={Starship}/>
      <Route exact path='/vehicles' component={Vehicles} />
      <Route exact path={`/vehicles/:id`} component={Vehicle}/>
      <Route exact path='/people' component={People} />
      <Route exact path={`/people/:id`} component={Person}/>
      <Route exact path='/films' component={Films} />
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
