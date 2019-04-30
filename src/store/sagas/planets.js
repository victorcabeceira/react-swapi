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
      const planetWithRandomImgNumber = {
        ...response.data.results[planet],
        randomImgNumber: Math.floor(Math.random() * 9)
      }
      fetchedPlanets.results.push(planetWithRandomImgNumber);
    }
    fetchedPlanets.count = response.data.count;

    yield put(actions.fetchPlanetsSuccess(fetchedPlanets));
  } catch (error) {
    yield put(actions.fetchPlanetsFail(error));
  }
}
