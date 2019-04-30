import axios from '../../axios-swapi';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchPlanetSaga(action) {
  yield put(actions.fetchPlanetStart());

  try {
    const response = yield axios.get('/planets/' + action.id);
    const fetchedPlanet = {
      ...response.data,
      randomImgNumber: Math.floor(Math.random() * 9)
    };

    yield put(actions.fetchPlanetSuccess(fetchedPlanet));
  } catch (error) {
    yield put(actions.fetchPlanetFail(error));
  }
}
