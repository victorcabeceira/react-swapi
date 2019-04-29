import { takeLatest } from 'redux-saga/effects';

import {
  fetchPlanetsSaga
} from './planets';

import {
  fetchPlanetSaga
} from './planet';

import * as actionTypes from '../actions/actionTypes';

export function* watchPlanets() {
  yield takeLatest(actionTypes.FETCH_PLANETS, fetchPlanetsSaga)
}

export function* watchPlanet() {
  yield takeLatest(actionTypes.FETCH_PLANET, fetchPlanetSaga)
}