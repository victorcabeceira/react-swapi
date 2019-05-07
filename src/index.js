import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import planetsReducer from './store/reducers/planets';
import planetReducer from './store/reducers/planet';
import starshipsReducer from './store/reducers/starships';
import starshipReducer from './store/reducers/starship';
import vehiclesReducer from './store/reducers/vehicles';
import vehicleReducer from './store/reducers/vehicle';
import peopleReducer from './store/reducers/people';
import personReducer from './store/reducers/person';
import filmsReducer from './store/reducers/films';
import filmReducer from './store/reducers/film';
import speciesReducer from './store/reducers/species';
import specieReducer from './store/reducers/specie';

import {
  watchPlanets,
  watchPlanet,
  watchStarships,
  watchStarship,
  watchVehicles,
  watchVehicle,
  watchPeople,
  watchPerson,
  watchFilms,
  watchFilm,
  watchSpecies,
  watchSpecie
} from './store/sagas';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null|| compose;

const rootReducer = combineReducers({
  planets: planetsReducer,
  planet: planetReducer,
  starships: starshipsReducer,
  starship: starshipReducer,
  vehicles: vehiclesReducer,
  vehicle: vehicleReducer,
  people: peopleReducer,
  person: personReducer,
  films: filmsReducer,
  film: filmReducer,
  species: speciesReducer,
  specie: specieReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchPlanets);
sagaMiddleware.run(watchPlanet);
sagaMiddleware.run(watchStarships);
sagaMiddleware.run(watchStarship);
sagaMiddleware.run(watchVehicles);
sagaMiddleware.run(watchVehicle);
sagaMiddleware.run(watchPeople);
sagaMiddleware.run(watchPerson);
sagaMiddleware.run(watchFilms);
sagaMiddleware.run(watchFilm);
sagaMiddleware.run(watchSpecies);
sagaMiddleware.run(watchSpecie);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
