import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchPlanetsSaga(action) {
  yield put(actions.fetchPlanetsStart());
  let queryParams = action.page > 0 ? ('?page=' + action.page) : '';

  try {
    const response = yield axios.get('/planets/' + queryParams);
    const fetchedPlanets = { count: 0, results: [] };

    for (const planet in response.data.results) {
      fetchedPlanets.results.push(response.data.results[planet]);
    }
    fetchedPlanets.count = response.data.count;

    yield put(actions.fetchPlanetsSuccess(fetchedPlanets));
  } catch (error) {
    yield put(actions.fetchPlanetsFail(error));
  }
}
